import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from 'config/firebase'
import { useAuthUser } from '@react-query-firebase/auth'

export function useFirebaseAuth() {
  const query = useAuthUser('user', auth)
  query.isLoading

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
