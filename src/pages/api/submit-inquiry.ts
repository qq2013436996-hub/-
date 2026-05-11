import type {APIRoute} from 'astro'
import {sanityClient} from 'sanity:client'

export const prerender = false

export const POST: APIRoute = async ({request}) => {
  try {
    const token = import.meta.env.SANITY_API_WRITE_TOKEN
    if (!token) {
      return new Response(
        JSON.stringify({
          success: false,
          message:
            'Server missing SANITY_API_WRITE_TOKEN. Add it to .env (see .env.example) and restart dev.',
        }),
        {status: 503, headers: {'Content-Type': 'application/json'}},
      )
    }

    let data: Record<string, unknown>
    try {
      data = (await request.json()) as Record<string, unknown>
    } catch {
      return new Response(JSON.stringify({success: false, message: 'Invalid JSON body'}), {
        status: 400,
        headers: {'Content-Type': 'application/json'},
      })
    }

    const name = typeof data.name === 'string' ? data.name.trim() : ''
    const email = typeof data.email === 'string' ? data.email.trim() : ''
    const companyName = typeof data.companyName === 'string' ? data.companyName.trim() : ''
    const country = typeof data.country === 'string' ? data.country.trim() : ''
    const phoneWhatsapp = typeof data.phoneWhatsapp === 'string' ? data.phoneWhatsapp.trim() : ''
    const productInterestedIn =
      typeof data.productInterestedIn === 'string' ? data.productInterestedIn.trim() : ''
    const estimatedOrderQuantity =
      typeof data.estimatedOrderQuantity === 'string' ? data.estimatedOrderQuantity.trim() : ''
    const buyerType = typeof data.buyerType === 'string' ? data.buyerType.trim() : ''
    const subject =
      typeof data.subject === 'string' && data.subject.trim() ? data.subject.trim() : '未填写主题'
    const message =
      typeof data.message === 'string' && data.message.trim() ? data.message.trim() : '未填写详情'
    const formType = typeof data.formType === 'string' && data.formType.trim() ? data.formType.trim() : 'request_quote'

    const firstSource = typeof data.firstSource === 'string' ? data.firstSource.trim() : ''
    const firstMedium = typeof data.firstMedium === 'string' ? data.firstMedium.trim() : ''
    const firstCampaign = typeof data.firstCampaign === 'string' ? data.firstCampaign.trim() : ''
    const firstContent = typeof data.firstContent === 'string' ? data.firstContent.trim() : ''
    const firstTerm = typeof data.firstTerm === 'string' ? data.firstTerm.trim() : ''
    const landingPage = typeof data.landingPage === 'string' ? data.landingPage.trim() : ''
    const currentPage = typeof data.currentPage === 'string' ? data.currentPage.trim() : ''
    const referrer = typeof data.referrer === 'string' ? data.referrer.trim() : ''
    const gclid = typeof data.gclid === 'string' ? data.gclid.trim() : ''
    const gbraid = typeof data.gbraid === 'string' ? data.gbraid.trim() : ''
    const wbraid = typeof data.wbraid === 'string' ? data.wbraid.trim() : ''
    const msclkid = typeof data.msclkid === 'string' ? data.msclkid.trim() : ''
    const fbclid = typeof data.fbclid === 'string' ? data.fbclid.trim() : ''
    const visitorPath = typeof data.visitorPath === 'string' ? data.visitorPath.trim() : ''
    const submittedAt =
      typeof data.submittedAt === 'string' && data.submittedAt.trim()
        ? data.submittedAt.trim()
        : new Date().toISOString()

    if (!name || !email) {
      return new Response(JSON.stringify({success: false, message: 'Name and email are required'}), {
        status: 400,
        headers: {'Content-Type': 'application/json'},
      })
    }

    const writeClient = sanityClient.withConfig({
      token,
      useCdn: false,
    })

    await writeClient.create({
      _type: 'inquiry',
      name,
      email,
      companyName,
      country,
      phoneWhatsapp,
      productInterestedIn,
      estimatedOrderQuantity,
      buyerType,
      subject,
      message,
      status: '待处理',
      formType,
      firstSource,
      firstMedium,
      firstCampaign,
      firstContent,
      firstTerm,
      landingPage,
      currentPage,
      referrer,
      gclid,
      gbraid,
      wbraid,
      msclkid,
      fbclid,
      visitorPath,
      submittedAt,
    })

    return new Response(JSON.stringify({success: true, message: 'Inquiry saved!'}), {
      status: 200,
      headers: {'Content-Type': 'application/json'},
    })
  } catch (error) {
    console.error('submit-inquiry:', error)
    return new Response(JSON.stringify({success: false, message: 'Error saving inquiry.'}), {
      status: 500,
      headers: {'Content-Type': 'application/json'},
    })
  }
}
