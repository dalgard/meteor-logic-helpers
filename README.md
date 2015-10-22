dalgard:logic-helpers 0.1.0
===========================

A basic set of logic helpers for Blaze.


### Helpers

Most of the helpers take any number of arguments, which are iterated over and compared with the value of the previous one, until the relevant condition is no longer met.

The helpers `and` and `or` return a value instead of a boolean, which can then be used directly in the template.

#### `and(...args)`

Returns the last truthy argument.

#### `or(...args)`

Returns the first truthy argument.

#### `is(...args)`

Returns whether all arguments are strictly equal.

The `is` helper can be used to mimic a `switch` statement:

```html
{{#if is status 'ok'}}
  <span>OK</span>
{{else}}{{#if is status 'maybe'}}
  <span>Maybe</span>
{{else}}
  <span>Nope</span>
{{/if}}{{/if}}
```

#### `gt(...args)`

Returns whether each argument is greater than the previous.

#### `lt(...args)`

Returns whether each argument is less than the previous.

#### `in(array, ...args)`

Returns whether the array contains all the following arguments.

#### `tern(condition, arg1, arg2)`

Returns the second or third argument, depending on the first.


### Jade

The helpers may be advantageously used with the [`dalgard:jade`](https://github.com/dalgard/meteor-jade) package, which allows this parenthesis syntax:

```jade
if is(name 'Paul')
  span.instrument Bass
```

Choosing between one of two classes:

```jade
i.icon(class=tern(isFiltered 'filter' 'world')
```

