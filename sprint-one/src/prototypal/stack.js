var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var madeStack = Object.create(stackMethods);
  madeStack.count = 0;
  madeStack.storage = {};
  return madeStack;

};

var stackMethods = {
  size: function(){
    return this.count;
  },

  push: function(value){
    this.count +=1;
    this.storage[this.count] = value;
  },

  pop: function(){
    if(this.count){
      var temp = this.storage[this.count];
      delete this.storage[this.count];
      this.count-=1;

      return temp;

    }

  }



};



