import Link from 'next/link'
import { useTranslation } from '../../i18n'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export async function generateMetadata({ params }) {
  const { locate } = await params
  const { t } = await useTranslation(locate, 'second-page')
  return { title: t('h1') }
}

export default async function Page({ params }) {
  const { locate } = await params
  const { t } = await useTranslation(locate, 'second-page')
  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <Link href={`/${locate}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer locate={locate} path="/second-page" />
    </>
  )
}