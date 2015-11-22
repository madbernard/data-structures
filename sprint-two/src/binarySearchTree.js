var BinarySearchTree = function(value){
  var newTree = _.extend({}, binarySearchTreeMethods);
  newTree.value = value;    //creates a key value pair with value as parameter
  newTree.left = null;
  newTree.right = null;
  return newTree;
};


var binarySearchTreeMethods = {};

//5 2 3 7 6
/*
        5
    7       2
      6   3


*/


binarySearchTreeMethods.insert = function(value){
  // check if value is bigger than this.value then...
  if (value > this.value) {
    // ...check if there is a tree to the right
    if (this.right !== null) {
      // advance into that new tree
      // and run `insert` again
      this.right.insert(value);
    }
    else {
      // if not... build a new tree to the right
      //(include value plus binaryTreeSearch constructor)
      this.right = BinarySearchTree(value);
    }
  }
  else {
    // otherwise check if there is a tree to the left
    // if not... build a new tree to the left
        //(include value plus binaryTreeSearch constructor)
      if (this.left !== null) {
      // advance into that new tree
      // and run `insert` again
      this.left.insert(value);
    }
    else {
      // if not... build a new tree to the left
      //(include value plus binaryTreeSearch constructor)
      this.left = BinarySearchTree(value);
    }
  }
};

//5 2 3 7
/*
        5
    7       2
         3


*/

binarySearchTreeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }

  if (this.value < target) {
    // go to right
    if (this.right){
      return this.right.contains(target);
    }
    return false;
  }
  else {
    if (this.left){
      return this.left.contains(target);
    }
    return false;
  }

};

binarySearchTreeMethods.depthFirstLog = function(cb){

  // if: both this.right and this.left are null...
  if (!this.right && !this.left){
  // ... call the cb and return
    cb(this.value);
    return;
  }

  //call the callback in this.value
  cb(this.value);
    // recursive case if there are children
    // call depthFirstLog in both sides at once (if we can)
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
    //  if not, left side, then right side.
    // return at the bottom

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
