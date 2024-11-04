'use client'

import { FooterBase } from './FooterBase'
import { useTranslation } from '../../../i18n/client'
// import { useParams } from 'next/navigation'

export const Footer = ({ locate, path }) => {
  const { t } = useTranslation(locate, 'footer')
  return <FooterBase t={t} locate={locate} path={path} />
}

// if you like to avoid prop drilling, you can do so with useParams()
// export const Footer = ({ path }) => {
//   const params = useParams()
//   const { t } = useTranslation(params.locate, 'footer')
//   return <FooterBase t={t} locate={params.locate} path={path} />
// }
