nordlys:logic-helpers 0.1.0
===========================

A basic set of logic helpers for Blaze.

https://github.com/mquandalle/meteor-jade/issues/43#issuecomment-148063371


### Helpers

Most of the helpers take any number of arguments, which are iterated over and compared with the value of the previous one, until the relevant condition is no longer met.

The helpers will often return a value instead of a boolean, which can then be used directly in the template.

##### `is(...args)`

##### `and(...args)`

##### `or(...args)`

##### `tern(condition, arg1, arg2)`

##### `gt(...args)`

##### `lt(...args)`

##### `in(array, ...args)`


### Use examples

...


### Jade

The helpers may be advantageously used with the `dalgard:jade` package, which allows parenthesis syntax:

```jade
if is(name 'Paul')
  span.instrument Bass
```

Choosing between one of two classes:

```jade
i.icon(class=tern(isFiltered 'filter' 'world')
```

