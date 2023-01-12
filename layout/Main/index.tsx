//*lodash

//*components
import TopBar from './TopBar'

//*material
import Box from '@mui/material/Box'
import { useFirebaseAuth } from 'hooks/auth'

//*icons-material

//*interface
interface MainProps {
  children: JSX.Element
}

function Main({ children }: MainProps) {
  //*define
  const { isAuth } = useFirebaseAuth()

  //*useRef

  //*states

  //*const

  //*functions

  return (
    <Box>
      <TopBar />
      <Box>{isAuth ? children : null}</Box>
    </Box>
  )
}

export default Main
