tiny-queue
============

A simple FIFO queue implementation as a linked list. The main benefit is to avoid doing `shift()`
on an array, which may be slow. It's implemented in the straightforward `root -> node1 -> node2 -> etc.`
architecture that you may have learned in CS 101.

This can typically be used as a drop-in replacement for an array, and it's only 38 lines of code.

See [this Wikipedia page](https://en.wikipedia.org/wiki/Linked_list#Tradeoffs) for a good explanation of the tradeoffs of a linked list versus other data structures.

### Status

[![browser support](https://ci.testling.com/nolanlawson/tiny-queue.png)](https://ci.testling.com/nolanlawson/tiny-queue)

### Usage

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

### API

The returned `Queue` object, once instantiated, only supports
four operations:

```js
queue.push()
queue.shift()
queue.slice() // returns a regular Array
queue.length
```

So it's basically a drop-in replacement for most na&iuml;ve usages
of an array as a queue.
