import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import HeaderApp from '@/components/layouts/Header'
import Image from 'next/image'

export default async function Page({ params }) {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <h2>
          <HeaderApp />
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
        <Image
          src="/android-chrome-512x512.png"
          alt="Next.js Logo"  
          width={180}
          height={37} />
        <div style={{ width: '100%' }}>
          <p>
            <Trans t={t} i18nKey="blog.text">
              Check out the corresponding <a href={t('blog.link')}>blog post</a> describing this example.
            </Trans>
          </p>
          <a href={t('blog.link')}>
            <img
              style={{ width: '50%' }}
              src="https://locize.com/blog/next-app-dir-i18n/next-app-dir-i18n.jpg"
            />
          </a>
        </div>
        <hr style={{ marginTop: 20, width: '90%' }} />
        <div>
          <Link href={`/${lng}/second-page`}>
            <button type="button">{t('to-second-page')}</button>
          </Link>
          <Link href={`/${lng}/client-page`}>
            <button type="button">{t('to-client-page')}</button>
          </Link>
        </div>
      </main>
      <Footer lng={lng}/>
    </>
  )
}
