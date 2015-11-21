var Tree = function(value){
  var newTree = _.extend({}, treeMethods);
  newTree.value = value;    //creates a key value pair with value as parameter
  newTree.children = [];

  return newTree;

};


var treeMethods = {};

treeMethods.addChild = function(value){
  //assign the Tree(value) just like the newTree in the constructor did
  this.children.push(Tree(value));   //calling the constructor again to assign value
  this.counter +=1;
};

treeMethods.contains = function(target){
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
