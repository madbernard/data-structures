var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = _.extend({}, queueMethods);
  obj.count = 0;
  obj.sizeCounter = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
  size : function(){
    return this.sizeCounter;
  },

  enqueue : function(value) {
    this.storage[this.count] = value;
    this.count += 1;
    this.sizeCounter += 1;
  },

  dequeue : function() {
    if (this.sizeCounter) {
      var results = this.storage[this.count - this.sizeCounter];
      delete this.storage[this.count - this.sizeCounter];
      this.sizeCounter -= 1;
      return results;
    }
  }
};


