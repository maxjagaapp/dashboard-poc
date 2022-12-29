import { useState, useEffect } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from 'config/firebase'

export function useFirebaseAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsAuth(true)
          setLoading(false)
        } else {
          setIsAuth(false)
          setLoading(false)
        }
      })
    } catch (error) {
      console.log('Error:', error)
    }

    return () => {
      setIsAuth(false)
      setLoading(true)
    }
  }, [])

  return {
    isAuth,
    loading,
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
