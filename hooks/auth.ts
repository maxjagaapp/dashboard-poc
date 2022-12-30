import { useState, useEffect } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'
import { auth } from 'config/firebase'

export function useFirebaseAuth() {
  //*states
  const [accessToken, setAccessToken] = useState<string>('')
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>()

  //*useEffect
  useEffect(() => {
    const unlisten = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setIsAuth(true)
        setLoading(false)
      } else {
        setUser(null)
        setIsAuth(false)
        setLoading(false)
      }
    })

    return () => {
      setUser(null)
      setIsAuth(false)
      setLoading(true)
      unlisten()
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const accessToken = await user.getIdToken()
        setAccessToken(accessToken)
      }
    }
    fetchData()

    return () => {
      setAccessToken('')
    }
  }, [user])

  return {
    isAuth,
    loading,
    accessToken,
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
