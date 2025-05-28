import type { ReactElement } from 'react'

import {
  SidebarList,
  SidebarListItemButton,
  SidebarListItemIcon,
  SidebarListItemText,
} from '@/components/sidebar/SidebarList'
import HelpCenterIcon from '@/public/images/sidebar/help-center.svg'
import { Link, ListItem, SvgIcon, Typography } from '@mui/material'
import DebugToggle from '../DebugToggle'
import { IS_PRODUCTION } from '@/config/constants'
import { HELP_CENTER_PROTOFIRE_URL, NEW_SUGGESTION_FORM } from '@safe-global/utils/config/constants'
import darkPalette from '@/components/theme/darkPalette'
import SuggestionIcon from '@/public/images/sidebar/lightbulb_icon.svg'
import ProtofireLogo from '@/public/images/protofire-logo.svg'

const SidebarFooter = (): ReactElement => {
  // const handleBeamer = () => {
  //   if (!hasBeamerConsent) {
  //     dispatch(openCookieBanner({ warningKey: CookieAndTermType.UPDATES }))
  //   }
  // }

  return (
    <SidebarList>
      {!IS_PRODUCTION && (
        <ListItem disablePadding>
          <DebugToggle />
        </ListItem>
      )}

      {/* <Track {...OVERVIEW_EVENTS.WHATS_NEW}>
        <ListItem disablePadding>
          <SidebarListItemButton id={BEAMER_SELECTOR} onClick={handleBeamer}>
            <SidebarListItemIcon color="primary">
              <BeamerIcon />
            </SidebarListItemIcon>
            <SidebarListItemText data-testid="list-item-whats-new" bold>
              What&apos;s new
            </SidebarListItemText>
          </SidebarListItemButton>
        </ListItem>
      </Track> */}

      <ListItem disablePadding>
        <a target="_blank" rel="noopener noreferrer" href={HELP_CENTER_PROTOFIRE_URL} style={{ width: '100%' }}>
          <SidebarListItemButton>
            <SidebarListItemIcon color="primary">
              <HelpCenterIcon />
            </SidebarListItemIcon>
            <SidebarListItemText data-testid="list-item-need-help" bold>
              Need help?
            </SidebarListItemText>
          </SidebarListItemButton>
        </a>
      </ListItem>

      <ListItem disablePadding>
        <a target="_blank" rel="noopener noreferrer" href={NEW_SUGGESTION_FORM} style={{ width: '100%' }}>
          <SidebarListItemButton style={{ backgroundColor: '#12FF80', color: 'black' }}>
            <SidebarListItemIcon color="primary">
              <SuggestionIcon />
            </SidebarListItemIcon>
            <SidebarListItemText bold>New Features Suggestion?</SidebarListItemText>
          </SidebarListItemButton>
        </a>
      </ListItem>

      <ListItem>
        <SidebarListItemText>
          <Typography variant="caption">
            Supported by{' '}
            <SvgIcon
              component={ProtofireLogo}
              inheritViewBox
              fontSize="small"
              sx={{ verticalAlign: 'middle', mx: 0.5 }}
            />
            <Link
              href="https://protofire.io/services/solution/safe-deployment"
              sx={{ color: darkPalette.primary.main, textDecoration: 'none' }}
            >
              Protofire
            </Link>
          </Typography>
        </SidebarListItemText>
      </ListItem>

      {/* <Track {...OVERVIEW_EVENTS.HELP_CENTER}>
        <ListItem data-testid="need-help-btn" disablePadding>
          <a target="_blank" rel="noopener noreferrer" href={HELP_CENTER_URL} style={{ width: '100%' }}>
            <SidebarListItemButton>
              <SidebarListItemIcon color="primary">
                <HelpCenterIcon />
              </SidebarListItemIcon>
              <SidebarListItemText data-testid="list-item-need-help" bold>
                Need help?
              </SidebarListItemText>
            </SidebarListItemButton>
          </a>
        </ListItem>
      </Track> */}
    </SidebarList>
  )
}

export default SidebarFooter
