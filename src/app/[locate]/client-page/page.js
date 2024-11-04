'use client'

import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from '../../i18n/client'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer/client'
import { useState } from 'react'

export default function Page({ params }) {
  const { locate } = React.use(params)
  const { t } = useTranslation(locate, 'client-page')
  const [counter, setCounter] = useState(0)
  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <p>{t('counter', { count: counter })}</p>
        <div>
          <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
          <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
        </div>
        <Link href={`/${locate}/second-client-page`}>
          {t('to-second-client-page')}
        </Link>
        <Link href={`/${locate}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer locate={locate} path="/client-page" />
    </>
  )
}