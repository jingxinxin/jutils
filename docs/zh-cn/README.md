# @jacks/jutils

根据我自己开发项目，基于lodash，moment等扩展常用公共JS方法库

## mongo

根据mongoId获取时间戳

```
getTimestampByID(_id)
```

根据mongoId获取日期

```
getDateByID(_id)
```

## 其他

对比对象的差异

```
differenceObj(object, base)
```

计算页数

```
getPageCount(count, limit)
```

删除空数据的字段

```
cleanEmpty(object)
```