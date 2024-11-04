import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbacklocate, languages, cookieName } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:locate*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

export function middleware(req) {
  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()
  let locate
  if (req.cookies.has(cookieName)) locate = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!locate) locate = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!locate) locate = fallbacklocate

  // Redirect if locate in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${locate}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url))
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const locateInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (locateInReferer) response.cookies.set(cookieName, locateInReferer)
    return response
  }

  return NextResponse.next()
}
