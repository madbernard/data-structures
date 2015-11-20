var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = _.extend({}, stackMethods);
  obj.count = 0;
  obj.storage = {};
  return obj;
};



var stackMethods = {
//we need size push and pop

size: function(){
  return this.count;
},

push: function(value){
  this.count += 1;
  this.storage[this.count]=value;
},

pop: function(){
  if (this.count) {
    var results = this.storage[this.count];
    delete this.storage[this.count];
    this.count -=1;
    return results;
  }
}


};



