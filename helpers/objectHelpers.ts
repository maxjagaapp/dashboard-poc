/* eslint-disable @typescript-eslint/no-explicit-any */

//*lodash
import groupBy from 'lodash/groupBy'
import keys from 'lodash/keys'

export function getArrayKeyWithObject(array: any[], field: string) {
  const groupByData = groupBy(array, field)
  const keyArray = keys(groupByData).sort()
  const objectGroupData = groupByData

  return { keyArray, objectGroupData }
}
