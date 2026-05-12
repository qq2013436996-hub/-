/**
 * One-off: assign FAQ `category` (MW Help Center sections) from question/answer text.
 * Usage: node --env-file=.env scripts/categorize-faqs.mjs [--dry-run]
 */
import {createClient} from '@sanity/client'

const dryRun = process.argv.includes('--dry-run')

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'kzl6pdyn'
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!token && !dryRun) {
  console.error('Missing SANITY_API_WRITE_TOKEN (required unless --dry-run)')
  process.exit(1)
}

const readClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-05-02',
  useCdn: false,
})

const writeClient = token
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-05-02',
      useCdn: false,
      token,
    })
  : readClient

/**
 * @param {string} t
 * @returns {string}
 */
function classify(t) {
  if (
    /payment|pay\b|invoice|\btt\b|t\/t|wire transfer|paypal|letter of credit|\blc\b|remittance|deposit|balance due|pricing terms|negotiate payment|payment terms|payment method|hidden fee|hidden fees|additional charges?|extra charge|附加费|隐藏费用|付款|支付|定金|尾款|发票|汇款|信用证|账期/i.test(
      t,
    )
  ) {
    return 'payment'
  }

  if (
    /shipping|freight|deliver(y|ies)|dispatch|logistics|customs|courier|\bdhl\b|\bfedex\b|\bups\b|air freight|sea freight|express ship|track my order|track.*order|internationally|outside of china|运输|物流|发货|船运|海运|空运|派送|船期|货运|清关|追踪|跟踪/i.test(
      t,
    )
  ) {
    return 'shipping'
  }

  if (/\bmoq\b|minimum order|起订|最低订购/i.test(t)) {
    if (/wholesale|批发/i.test(t)) return 'general'
    if (/customiz|定制|oem|odm|贴牌|私人|bespoke/i.test(t)) return 'customization'
    return 'general'
  }

  if (
    /after.?sale|warranty|return policy|\breturns\b|refund|technical support|customer service|training|consulting|reply within|response time|maintenance|客服|售后|质保|保修|退换|技术支持|培训|咨询|服务时间/i.test(
      t,
    )
  ) {
    return 'service'
  }

  if (/how can i plan an order|plan my first order|first time order|下单流程|订购流程|如何下单/i.test(t)) return 'general'

  if (
    /\boem\b|\bodm\b|customiz|custom label|private label|branding|logo|artwork|packaging design|mold|bespoke|fragrance dev|scent dev|专属|定制|贴牌|包材|包装设计|开模|来样|香型开发/i.test(
      t,
    )
  ) {
    return 'customization'
  }

  if (
    /product categor|product line|what (kinds|types) of|fragrance|scent range|candle type|wax type|wick|material|specification|\bsku\b|catalog|sample|eco-friendly|sustainable|产品|香味|香型|蜡烛|蜡基|烛芯|规格|类目|样品|样板|环保|可持续/i.test(
      t,
    )
  ) {
    return 'products'
  }

  return 'general'
}

const rows = await readClient.fetch(`*[_type == "faq"]{_id, question, answer, category}`)

let changed = 0
for (const row of rows) {
  const blob = `${row.question || ''} ${row.answer || ''}`
  const next = classify(blob)
  const prev = row.category || 'general'
  if (next === prev) {
    console.log(`[skip] ${row._id}  "${(row.question || '').slice(0, 72)}..."  (${prev})`)
    continue
  }
  console.log(`[set ] ${row._id}  "${(row.question || '').slice(0, 72)}..."  ${prev} -> ${next}`)
  changed += 1
  if (!dryRun) {
    await writeClient.patch(row._id).set({category: next}).commit()
  }
}

console.log(`\nDone. ${changed} document(s) ${dryRun ? 'would be' : ''} updated.`)
