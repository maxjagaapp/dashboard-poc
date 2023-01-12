import { useFormik } from 'formik'
import * as yup from 'yup'

//*lodash

//*components
import StyleTextField from './StyledTextField'

//*material
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Stack from '@mui/material/Stack'
import DialogTitle from '@mui/material/DialogTitle'
import CircularProgress from '@mui/material/CircularProgress'

//*icons-material

//*interface

//*hooks
import { useFirebaseAuth, loginWithEmailAndPassword } from 'hooks/auth'

//*validation
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password is less than 6')
    .required('Password is required'),
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
    validateOnChange: true,
    validateOnBlur: false,
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
            <DialogTitle variant="h4">LOGIN</DialogTitle>
            <DialogContent dividers>
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>
                  <StyleTextField
                    id="email"
                    label="Email Address"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={Boolean(formik.errors.email)}
                    helperText={formik.errors.email}
                  />
                  <StyleTextField
                    id="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={Boolean(formik.errors.password)}
                    helperText={formik.errors.password}
                  />
                </Stack>
              </form>
            </DialogContent>
            <DialogActions>
              {!loading && (
                <Button
                  disabled={!formik.isValid || formik.isSubmitting}
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
