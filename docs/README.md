# @jacks/jutils

> A common set of JavaScript tool Libraries, Welcome to PR

---

## getTimestampByID

> Get Timestamp based on mongoId

```
getTimestampByID(_id)
```

#### Since 
0.1.0

---

## getDateByID
> Get Date based on mongoId

```
getDateByID(_id)
```

#### Since 
0.1.0

---

## getPageCount
>Calculate page number

```
getPageCount(total, limit)
```

#### Since 
0.1.0

---

## differenceObj

> Differences in Contrast Objects 

```
differenceObj(object, base)
```

#### Since 
0.1.0

---

## cleanEmpty
> delete properties of object if the value of property is `null`, `''`,
> `NaN`, `undefined`

```
cleanEmpty(object)
```

#### Since 
0.1.0

#### Arguments
`object (Object)`: The destination object.

#### Returns 
`(Object)`: Returns object.

#### Example
```js
var o = {
    a: 1,
    b: '',
    c: null,
    d: 0,
    e: NaN,
    f: undefined
  }
cleanEmpty(o)
// { a: 1, d: 0 }
```

---

## findCollectionObj
> extend [lodash.find](https://lodash.com/docs/4.17.11#find) to return {}
> replace of `undefined`

```
findCollectionObj(collection, [predicate=_.identity], [fromIndex=0])
```

#### Since 
0.1.0

#### Arguments 
`collection (Array|Object)`: The collection to inspect.

`[predicate=_.identity] (Function)`: The function invoked per iteration.

`[fromIndex=0] (number)`: The index to search from.

#### Returns
`(Object)`: Returns the matched element, else {}.

#### Example
```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
findCollectionObj(users, function(o) { return o.age < 40; });
// => object for 'barney'
 
// The `_.matches` iteratee shorthand.
findCollectionObj(users, { 'age': 1, 'active': true });
// => object for 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
findCollectionObj(users, ['active', false]);
// => object for 'fred'
 
// The `_.property` iteratee shorthand.
findCollectionObj(users, 'active');
// => object for 'barney'

findCollectionObj(users,['a',1]);
// => object for '{}'
```


