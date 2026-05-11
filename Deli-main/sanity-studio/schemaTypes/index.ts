import {inquiry} from './documents/inquiry'
import {application} from './documents/application'
import {author} from './documents/author'
import {blogPost} from './documents/blogPost'
import {caseStudy} from './documents/caseStudy'
import {certification} from './documents/certification'
import {faq} from './documents/faq'
import {galleryItem} from './documents/galleryItem'
import {homePage} from './documents/homePage'
import {page} from './documents/page'
import {product} from './documents/product'
import {productCategory} from './documents/productCategory'
import {siteSettings} from './documents/siteSettings'
import {testimonial} from './documents/testimonial'
import {cta} from './objects/cta'
import {featureItem} from './objects/featureItem'
import {imageWithAlt} from './objects/imageWithAlt'
import {portableText} from './objects/portableText'
import {productDetailTab} from './objects/productDetailTab'
import {sectionHeader} from './objects/sectionHeader'
import {seo} from './objects/seo'
import {specification} from './objects/specification'

export const schemaTypes = [
  siteSettings,
  homePage,
  page,
  faq,
  certification,
  testimonial,
  author,
  galleryItem,
  productCategory,
  product,
  application,
  caseStudy,
  blogPost,
  inquiry,
  imageWithAlt,
  cta,
  featureItem,
  sectionHeader,
  portableText,
  specification,
  productDetailTab,
  seo,
]
