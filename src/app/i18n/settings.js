export const fallbacklocate = 'en'
export const languages = [fallbacklocate, 'de', 'it']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (locate = fallbacklocate, ns = defaultNS) {
  return {
    // debug: true,
    supportedlocates: languages,
    // preload: languages,
    fallbacklocate,
    locate,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  }
}
