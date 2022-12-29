import { useFormik } from 'formik'
import * as yup from 'yup'

//*lodash

//*components

//material
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Stack from '@mui/material/Stack'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'

//icons-material

//interfaces

//hooks
import { useFirebaseAuth, loginWithEmailAndPassword } from 'hooks/auth'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().min(6, 'Password is less than 6').required('Required'),
})

function LoginDialog() {
  //*define
  const { isAuth, loading } = useFirebaseAuth()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await loginWithEmailAndPassword(values.email, values.password)
    },
  })

  //*states

  //*const

  //*functions

  return (
    <Dialog
      open={!isAuth}
      sx={{
        width: '100%',
        backdropFilter: 'blur(14px)',
      }}
      maxWidth="sm"
      fullWidth
    >
      {loading ? (
        <DialogContent>
          <Box
            sx={{
              width: '100%',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress size={100} />
          </Box>
        </DialogContent>
      ) : (
        !isAuth && (
          <>
            <DialogTitle variant="h3">LOGIN</DialogTitle>
            <DialogContent>
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2} sx={{ mt: 1 }}>
                  <TextField
                    size="small"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    size="small"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Stack>
              </form>
            </DialogContent>
            <DialogActions>
              {!loading && (
                <Button
                  variant="contained"
                  type="submit"
                  onClick={formik.submitForm}
                >
                  Login
                </Button>
              )}
            </DialogActions>
          </>
        )
      )}
    </Dialog>
  )
}

export default LoginDialog
