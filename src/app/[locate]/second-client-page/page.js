'use client'

import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from '../../i18n/client'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer/client'

export default function Page({ params }) {
  const { locate } = React.use(params)
  const { t } = useTranslation(locate, 'second-client-page')
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
      <Footer locate={locate} path="/second-client-page" />
    </>
  )
}