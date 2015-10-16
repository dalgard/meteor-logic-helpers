nordlys:logic-helpers 0.1.0
===========================

A basic set of logic helpers for Blaze.


### Helpers

Most of the helpers take any number of arguments, which are iterated over and compared with the value of the previous one, until the relevant condition is no longer met.

The helpers `and` and `or` return a value instead of a boolean, which can then be used directly in the template.

##### `and(...args)`

Return the last truthy argument.

##### `or(...args)`

Return the first truthy argument.

##### `is(...args)`

Return whether all arguments are strictly equal.

##### `gt(...args)`

Return whether each argument is greater than the previous.

##### `lt(...args)`

Return whether each argument is less than the previous.

##### `in(array, ...args)`

Return whether the array contains all the following arguments.

##### `tern(condition, arg1, arg2)`

Return the second or third argument, depending on the first.


### Use examples

https://github.com/mquandalle/meteor-jade/issues/43#issuecomment-148063371


### Jade

The helpers may be advantageously used with the `dalgard:jade` package, which allows this parenthesis syntax:

```jade
if is(name 'Paul')
  span.instrument Bass
```

Choosing between one of two classes:

```jade
i.icon(class=tern(isFiltered 'filter' 'world')
```

