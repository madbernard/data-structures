var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var madeQueue = Object.create(queueMethods);
madeQueue.count = 0;
madeQueue.sizeCounter = 0;
madeQueue.storage = {};
return madeQueue;
};

var queueMethods = {
  size: function(){
    return this.sizeCounter;
  },

  enqueue: function(value){
    this.storage[this.count] = value;
    this.count +=1;
    this.sizeCounter += 1;

  },

  dequeue: function(){
    if (this.sizeCounter){
      var temp = this.storage[this.count - this.sizeCounter];
      delete this.storage[this.count - this.sizeCounter];
      this.sizeCounter -= 1;
      return temp;
    }
  }


};




