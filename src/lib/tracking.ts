export type TrackingPayload = {
  firstSource: string
  firstMedium: string
  firstCampaign: string
  firstContent: string
  firstTerm: string
  landingPage: string
  currentPage: string
  referrer: string
  gclid: string
  gbraid: string
  wbraid: string
  msclkid: string
  fbclid: string
  visitorPath: string
}

export const emptyTrackingPayload = (): TrackingPayload => ({
  firstSource: '',
  firstMedium: '',
  firstCampaign: '',
  firstContent: '',
  firstTerm: '',
  landingPage: '',
  currentPage: '',
  referrer: '',
  gclid: '',
  gbraid: '',
  wbraid: '',
  msclkid: '',
  fbclid: '',
  visitorPath: '',
})
