'use strict';

// Simple FIFO queue implementation to avoid having to do shift()
// on an array, which is slow.
// The returned Queue object, once instantiated, only supports
// three operations:
// queue.push()
// queue.shift()
// queue.length
// So it's basically a drop-in replacement for most naive usages
// of an array as a queue.

function Queue() {
  this.length = 0;
}

Queue.prototype.push = function (item) {
  var node = {item: item};
  if (this.last) {
    this.last = this.last.next = node;
  } else {
    this.last = this.first = node;
  }
  this.length++;
};

Queue.prototype.shift = function () {
  var node = this.first;
  if (node) {
    this.first = node.next;
    if (!(--this.length)) {
      this.last = undefined;
    }
    return node.item;
  }
};

module.exports = Queue;
