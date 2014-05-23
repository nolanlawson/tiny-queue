simple-queue
============

A simple FIFO queue implementation to avoid having to do `shift()`
on an array, which is slow. Can typically be used as a drop-in replacement for an array, and it's only 24 lines of code.

Usage:

```js
var Queue = require('simple-queue');
var queue = new Queue();

queue.push('foo');
queue.push('bar');
queue.shift(); // 'foo'
queue.shift(); //'bar'
queue.length; // 0
queue.shift(); // undefined
```

The returned `Queue` object, once instantiated, only supports
three operations:

```js
queue.push()
queue.shift()
queue.length
```

So it's basically a drop-in replacement for most na&iuml;ve usages
of an array as a queue.
