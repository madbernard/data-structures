var BinarySearchTree = function(value){
  var newTree = _.extend({}, binarySearchTreeMethods);
  newTree.value = value;    //creates a key value pair with value as parameter
  newTree.left = [];
  newTree.right = [];
  return newTree;
};


var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value){
  // assign the BinarySearchTree(value) just like the newTree in the constructor did
  // check if value is bigger than this.value then...

    // ...check if there is a tree to the right
      // advance into that new tree and run `insert` again
      // if not... build a new tree to the right

    // otherwise check if there is a tree to the left
      // advance into that new tree and run `insert` again
      // if not... build a new tree to the left

  this.children.push(BinarySearchTree(value));   //calling the constructor again to assign value

};

binarySearchTreeMethods.contains = function(target){
  // we need to traverse through the entire tree
  var found = false;

  function search (node) {
    // base case if the value is the target or if there are no children
    if (node.value === target){
      found = true;
      return;
    }

    // recursive case if there are children
    for ( var i = 0; i < node.children.length; i++) {
      search(node.children[i]);
    }
  }

  search(this);

  return found;
};

binarySearchTreeMethods.depthFirstLog = function(){};
/*
 * Complexity: What is the time complexity of the above functions?
 */
