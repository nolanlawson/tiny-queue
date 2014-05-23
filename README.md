tiny-queue
============

A simple FIFO queue implementation to avoid having to do `shift()`
on an array, which is slow. It's implemented in the straightforward `root -> node1 -> node2 -> etc.` architecture that we all wrote in CS 101.

This can typically be used as a drop-in replacement for an array, and it's only 24 lines of code.

Usage:

```
npm install tiny-queue
```

Then:

```js
var Queue = require('tiny-queue');
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
