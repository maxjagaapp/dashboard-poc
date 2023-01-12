import { signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { useAuthUser } from '@react-query-firebase/auth'

//*config
import { auth } from 'config/firebase'

export function useFirebaseAuth(): {
  isAuth: boolean
  loading: boolean
  user: User | undefined
} {
  const query = useAuthUser('user', auth)

  //*states

  //*const
  const loading = query.isLoading
  const isAuth = Boolean(query.data)
  const user = query.data

  return {
    isAuth,
    loading,
    user,
  }
}

export async function loginWithEmailAndPassword(
  email: string,
  password: string
) {
  await signInWithEmailAndPassword(auth, email, password)
}

export async function logout() {
  await signOut(auth)
}
