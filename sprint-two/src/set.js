/*  PLAN:
1. Fill the set construction function with unique elements
2. Complete the methods on setPrototype
*/

//this constructor is going to return a set object
var Set = function(){
  var set = Object.create(setPrototype);
  //set storage for the set in an array.
  //Update this storage from undefined to an empty array
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // Compare item with items in the array
  // Leverage contains from bleow
  // `Push` into the set array if..
  // ... value that is adding is unique
  if (!this.contains(item)){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  // Compare item with items in the array
  // leverage _.contains (this._storage is the object)
  //return true if `item` is there
  return _.contains (this._storage, item);
};

setPrototype.remove = function(item){
  // Compare item with items in the array
  // Leverage contains from above
  // splice the item out
  var index = this._storage.indexOf(item);
  //check if the item exists:
  if (index !== -1){
    this._storage.splice(index);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */