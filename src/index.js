import moment from 'moment'
import {
  find,
  isEqual,
  isNaN,
  isNil,
  isObject,
  transform
} from 'lodash'

// Get Timestamp based on mongoId
export const getTimestampByID = _id => parseInt(_id.toString().substring(0, 8), 16) * 1000

// Get Date based on mongoId
export const getDateByID = _id => moment(getTimestampByID(_id)).format('YYYY-MM-DD HH:mm:ss')

// 对比对象的差异
export const differenceObj = (object, base) => {
  function changes (object, base) {
    return transform(object, function (result, value, key) {
      if (!isEqual(value, base[ key ])) {
        result[ key ] = (isObject(value) && isObject(base[ key ]) ? changes(value, base[ key ]) : value)
      }
    })
  }

  return changes(object, base)
}

export const getPageCount = (count, limit) => Math.ceil((count | 0) / limit)

// 删除没填数据的字段
export const cleanEmpty = object => Object.keys(object).forEach(key => (object[ key ] === '' || isNil(object[ key ]) || isNaN(object[ key ])) ? delete object[ key ] : object[ key ])

// 根据value匹配集合中对应的对象
export const findCollectionObj = (collection, predicate) => find(collection, predicate) || {}