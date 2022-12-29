//*lodash

//*components
import TopBar from './TopBar'

//material
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { defaultFullVh } from 'utils/constant'

//icons-material

//interfaces
interface MainProps {
  children: JSX.Element
}

function Main({ children }: MainProps) {
  //*define

  //*states

  //*const

  //*functions
  return (
    <Box>
      <TopBar />
      <Box
        sx={{
          height: defaultFullVh,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Main
