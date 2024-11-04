import { useTranslation } from '../../../i18n'
import { FooterBase } from './FooterBase'

export const Footer = async ({ locate, path }) => {
  const { t } = await useTranslation(locate, 'footer')
  return <FooterBase t={t} locate={locate} path={path} />
}
