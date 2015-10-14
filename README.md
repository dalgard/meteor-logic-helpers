nordlys:logic-helpers 0.1.0
===========================

A basic set of logic helpers for Blaze.

### Helpers

All helpers take any number of arguments, which are iterated over and compared with the value of the previous one, until the relevant condition is no longer met, and the most recent value is returned.

##### `is`

...

##### `and`

...

##### `or`

...

##### `tern`

...

##### `gt`

...

##### `lt`

...

##### `in`

...

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

