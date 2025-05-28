import type { ReactElement, ReactNode } from 'react'
import { SvgIcon, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from 'next/link'
import { useRouter } from 'next/router'
import css from './styles.module.css'
import { AppRoutes } from '@/config/routes'
import packageJson from '../../../../package.json'
import ExternalLink from '../ExternalLink'
import MUILink from '@mui/material/Link'
import { DISCORD_URL, HELP_CENTER_PROTOFIRE_URL, TWITTER_URL } from '@safe-global/utils/config/constants'
import darkPalette from '@/components/theme/darkPalette'
import ProtofireLogo from '@/public/images/protofire-logo.svg'
import DiscordIcon from '@/public/images/common/discord-icon.svg'
import TwitterIcon from '@mui/icons-material/X'

const footerPages = [
  AppRoutes.welcome.index,
  AppRoutes.settings.index,
  AppRoutes.imprint,
  AppRoutes.privacy,
  AppRoutes.cookie,
  AppRoutes.terms,
  AppRoutes.licenses,
]

const FooterLink = ({ children, href }: { children: ReactNode; href: string }): ReactElement => {
  return href ? (
    <Link href={href} passHref legacyBehavior>
      <MUILink>{children}</MUILink>
    </Link>
  ) : (
    <MUILink>{children}</MUILink>
  )
}

const Footer = (): ReactElement | null => {
  const router = useRouter()

  if (!footerPages.some((path) => router.pathname.startsWith(path))) {
    return null
  }

  const getHref = (path: string): string => {
    return router.pathname === path ? '' : path
  }

  return (
    <footer className={css.container}>
      <ul>
        {true ? (
          <>
            {/* <li>
              <Typography variant="caption">&copy;2022–{new Date().getFullYear()} Core Contributors GmbH</Typography>
            </li> */}
            <li>
              <ExternalLink href={DISCORD_URL} noIcon sx={{ svg: { mr: 0.5 } }}>
                <SvgIcon component={DiscordIcon} inheritViewBox fontSize="inherit" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={TWITTER_URL} noIcon sx={{ svg: { mr: 0.5 } }}>
                <SvgIcon component={TwitterIcon} inheritViewBox fontSize="inherit" />
              </ExternalLink>
            </li>
            <li>
              <FooterLink href={getHref(AppRoutes.terms)}>Terms</FooterLink>
            </li>
            {/* <li>
              <FooterLink href={getHref(AppRoutes.privacy)}>Privacy</FooterLink>
            </li>
            <li>
              <FooterLink href={getHref(AppRoutes.licenses)}>Licenses</FooterLink>
            </li>
            <li>
              <FooterLink href={getHref(AppRoutes.imprint)}>Imprint</FooterLink>
            </li> */}
            <li>
              <FooterLink href={getHref(AppRoutes.cookie)}>Cookie policy</FooterLink>
            </li>
            {/* <li>
              <FooterLink href={getHref(AppRoutes.settings.index)}>Preferences</FooterLink>
            </li> */}
            <li>
              <ExternalLink href={HELP_CENTER_PROTOFIRE_URL} noIcon sx={{ span: { textDecoration: 'underline' } }}>
                Help
              </ExternalLink>
            </li>
            <li>
              <Typography variant="caption">
                Supported by{' '}
                <SvgIcon
                  component={ProtofireLogo}
                  inheritViewBox
                  fontSize="small"
                  sx={{ verticalAlign: 'middle', mx: 0.5 }}
                />
                <MUILink
                  href="https://protofire.io/services/solution/safe-deployment"
                  sx={{ color: darkPalette.primary.main, textDecoration: 'none' }}
                >
                  Protofire
                </MUILink>
              </Typography>
            </li>
          </>
        ) : (
          <li>This is an unofficial distribution of the app</li>
        )}

        <li>
          <ExternalLink href={`${packageJson.homepage}/releases/tag/v${packageJson.version}`} noIcon>
            <SvgIcon component={GitHubIcon} inheritViewBox fontSize="inherit" sx={{ mr: 0.5 }} /> v{packageJson.version}
          </ExternalLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
