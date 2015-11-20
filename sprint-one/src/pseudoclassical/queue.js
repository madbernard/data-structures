var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.sizeCounter = 0;
  this.storage = {};
};

Queue.prototype.size = function(){
  return this.sizeCounter;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
  this.sizeCounter += 1;
};

Queue.prototype.dequeue = function() {
  if (this.sizeCounter) {
    var temp = this.storage[this.counter - this.sizeCounter];
    delete this.storage[this.counter - this.sizeCounter];
    this.sizeCounter -= 1;
    return temp;
  }
};