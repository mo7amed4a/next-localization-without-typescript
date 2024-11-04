import { languages, fallbacklocate } from '../../i18n/settings'
import { useTranslation } from '../../i18n'

export async function generateStaticParams() {
  return languages.map((locate) => ({ locate }))
}

export async function generateMetadata({ params }) {
  let { locate } = await params
  if (languages.indexOf(locate) < 0) locate = fallbacklocate
  const { t } = await useTranslation(locate, 'second-page')
  return {
    title: t('title')
  }
}

export default async function Layout({ children }) {
  return children
}
