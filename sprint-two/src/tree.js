var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  // The trick is, how to haul a "true" out from a branch?
  // last time, we used a subroutine (interior recursing function) with a closure variable,
  // that only changed when a true was found, and was returned at the end

  // I know it's possible to do this by recursing the .contains, though.
  // With reduce?  There was a telltale variable returned?

  var telltale =

  // base case
  if (this.value === target) {
    return true;
  }
  // other base case
  else if {

  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
