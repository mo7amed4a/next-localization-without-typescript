import './global.css'

import { dir } from 'i18next'
import { languages, fallbacklocate } from '../i18n/settings'
import { useTranslation } from '../i18n'

export async function generateStaticParams() {
  return languages.map((locate) => ({ locate }))
}

export async function generateMetadata({ params }) {
  let { locate } = await params
  if (languages.indexOf(locate) < 0) locate = fallbacklocate
  const { t } = await useTranslation(locate)
  return {
    title: t('title'),
    content: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

export default async function RootLayout({
  children,
  params
}) {
  const { locate } = await params
  return (
    <html lang={locate} dir={dir(locate)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
