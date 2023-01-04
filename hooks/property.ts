import { useMemo } from 'react'
import { useFirestoreQuery } from '@react-query-firebase/firestore'
import { query, collection, DocumentData } from 'firebase/firestore'
import { startCase } from 'lodash'
import { firestore } from 'config/firebase'

export interface PropertyData {
  id: string
  name: string
  propertyType: string
  first_address: string
  second_address: string
  city: string
  state: string
  status: string
}

export function usePropertyGetAll() {
  //*define
  const ref = query(collection(firestore, 'properties'))
  const queryData = useFirestoreQuery(['properties'], ref)
  const data = useMemo((): PropertyData[] => {
    if (queryData.data)
      return queryData.data.docs.map((docSnapshot: DocumentData) => {
        return {
          ...docSnapshot.data(),
          propertyType: startCase(docSnapshot.data().property_type),
          id: docSnapshot.id,
        }
      })
    else return []
  }, [queryData.data])

  //*states

  //*useEffect

  return { data, isLoading: queryData.isLoading }
}
