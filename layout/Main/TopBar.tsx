import { useRouter } from 'next/router'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'

//*lodash

//*components

//*material
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

//*icons-material
import MenuIcon from '@mui/icons-material/Menu'

//*hooks
import { logout } from 'hooks/auth'

//*interface

function TopBar() {
  //*define
  const router = useRouter()
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  //*states

  //*const

  //*functions
  const handleGoToPage = (path: string) => {
    router.push(path)
    popupState.close()
  }

  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar variant="dense">
        <IconButton {...bindTrigger(popupState)} edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={() => handleGoToPage('/')}>Home</MenuItem>
          <MenuItem onClick={() => handleGoToPage('/visitor')}>
            Visitor
          </MenuItem>
          <MenuItem onClick={() => handleGoToPage('/feedback')}>
            Feedback
          </MenuItem>
          <MenuItem onClick={logout}>Log Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
