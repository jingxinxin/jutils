# @jacks/jutils

> 根据我自己开发项目，基于lodash，moment等扩展常用公共JS方法库

## 获取时间戳

> 根据mongoId获取时间戳

```
getTimestampByID(_id)
```

## 获取日期

> 根据mongoId获取日期

```
getDateByID(_id)
```

## 获取页数

> 计算页码

```
getPageCount(count, limit)
```

## 对比差异

> 对比对象的差异

```
differenceObj(object, base)
```
## 删除空对象

> 删除对象属性包含`null`,`''`,`NaN`,`undefined`

```
cleanEmpty(object)
```
#### 参数
`object (Object)`: 目标对象

#### 返回 
`(Object)`: 返回对象

#### 例子
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

## 找集合中的对象
> 扩展 [lodash.find](https://lodash.com/docs/4.17.11#find) 返回`{}`
> 替换为 `undefined`

```
findCollectionObj(collection, [predicate=_.identity], [fromIndex=0])
```

#### 参数 
`collection (Array|Object)`: 目标集合

`[predicate=_.identity] (Function)`: 每次迭代调用的函数

`[fromIndex=0] (number)`: 要搜索的索引

#### 返回
`(Object)`: 返回匹配的元素，否则为空对象

#### 例子
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