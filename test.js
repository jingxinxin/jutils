import test from 'ava'
import {
  cleanEmpty,
  differenceObj,
  getDateByID,
  getPageCount,
  getTimestampByID,
  findCollectionObj
} from './lib'

test('getTimestampByID', t => {
  t.is(getTimestampByID('5cd0a3b7e643b94cd660abb8'), 1557177271000)
})


test('getPageCount', t => {
  t.is(getPageCount(200, 11), 19)
})

test('difference', t => {
  let o1 = {
    b: 1,
    c: 2,
    d: { f: 1 },
    z: 0
  }
  let o2 = {
    c: 3,
    d: { f: 2 },
    z: 0
  }
  t.deepEqual(differenceObj(o1, o2), {
    b: 1,
    c: 2,
    d: { f: 1 }
  })
})

test('getDateById', t => {
  t.is(getDateByID('5cd0a3b7e643b94cd660abb8'), '2019-05-07 05:14:31')
})

test('cleanEmpty', t => {
  let o = {
    a: 1,
    b: '',
    c: null,
    d: 0,
    e: NaN,
    f: undefined
  }
  cleanEmpty(o)
  t.deepEqual(o, {
    a: 1,
    d: 0
  })
})

test('findCollectionObj', t => {
  let collection = [
    {
      name: 'ww',
      sex : 0
    }, {
      name: 'jx',
      sex : 0
    }, {
      name: 'aa',
      sex : 1
    }
  ]
  t.deepEqual(findCollectionObj(collection,{name:'ww'}),{name:'ww',sex:0})
  t.deepEqual(findCollectionObj(collection,['sex',1]),{name:'aa',sex:1})
})

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')

  t.is(await bar, 'bar')
})
