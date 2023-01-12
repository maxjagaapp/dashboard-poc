import { useMemo } from 'react'
import { useFirestoreQuery } from '@react-query-firebase/firestore'
import { query, collection, DocumentData } from 'firebase/firestore'

//*lodash
import startCase from 'lodash/startCase'

//*config
import { firestore } from 'config/firebase'

//*helpers
import { getArrayKeyWithObject } from 'helpers/objectHelpers'

//*interface
export interface PropertyData {
  id: string
  name: string
  property_type: string
  first_address: string
  second_address: string
  city: string
  state: string
  status: string
  property_tag: string
  total_unit: number
}

export function usePropertyGetAll(): {
  propertyData: PropertyData[]
  isPropertyLoading: boolean
} {
  //*define
  const ref = query(collection(firestore, 'properties'))
  const queryData = useFirestoreQuery(['properties'], ref)

  //*useMemo
  const propertyData = useMemo((): PropertyData[] => {
    if (queryData.data)
      return queryData.data.docs.map((docSnapshot: DocumentData) => {
        return {
          ...docSnapshot.data(),
          property_type: docSnapshot.data().property_type
            ? startCase(docSnapshot.data().property_type)
            : 'None',
          status: docSnapshot.data()?.status
            ? startCase(docSnapshot.data().status)
            : 'Available',
          city: docSnapshot.data()?.city ? docSnapshot.data().city : 'None',
          state: docSnapshot.data()?.state ? docSnapshot.data().state : 'None',
          property_tag: docSnapshot.data()?.property_tag
            ? startCase(docSnapshot.data().property_tag)
            : 'None',
          id: docSnapshot.id,
        }
      })
    else return []
  }, [queryData.data])

  //*states

  //*useEffect

  return { propertyData, isPropertyLoading: queryData.isLoading }
}

export function useGetAllPropertyLocationInArray() {
  //*define
  const { propertyData, isPropertyLoading } = usePropertyGetAll()

  //*states

  //*useMemo
  const propertyCityArray = useMemo(() => {
    if (isPropertyLoading) return []
    const { keyArray } = getArrayKeyWithObject(propertyData, 'city')
    return keyArray
  }, [propertyData, isPropertyLoading])

  const propertyStateArray = useMemo(() => {
    if (isPropertyLoading) return []
    const { keyArray } = getArrayKeyWithObject(propertyData, 'state')
    return keyArray
  }, [propertyData, isPropertyLoading])

  //*useEffect

  return { propertyCityArray, propertyStateArray }
}
