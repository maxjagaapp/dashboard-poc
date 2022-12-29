//*lodash

//*components

//material
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

//icons-material
import MenuIcon from '@mui/icons-material/Menu'

//interfaces

function TopBar() {
  //*define

  //*states

  //*const

  //*functions

  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar variant="dense">
        <IconButton color="inherit" edge="start">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
