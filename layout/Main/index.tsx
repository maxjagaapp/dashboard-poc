//*lodash

//*components
import TopBar from './TopBar'

//material
import Box from '@mui/material/Box'

//icons-material

//interfaces
interface MainProps {
  children: JSX.Element
}

function Main({ children }: MainProps) {
  //*define

  //*useRef

  //*states

  //*const

  //*functions

  return (
    <Box>
      <TopBar />
      <Box>{children}</Box>
    </Box>
  )
}

export default Main
