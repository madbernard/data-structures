var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var obj = _.extend({}, stackMethods);
obj.count = 0;
return obj;
};



var stackMethods = {
//we need size push and pop

size: function(){
  return this.count;
},

push: function(value){
  this.count += 1;
  this.count[this.count]=value;
},

pop: function(){
  if (this.count) {
    this.count -=1;
    delete this.count[this.count];

  }
}




};



