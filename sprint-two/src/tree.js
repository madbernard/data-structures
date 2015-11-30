// Tree is a function that creates an object,
// that has the key "value" which holds a string,
// and the key "treeMethods" which holds an objects full of function references,
// and the key "children" which holds an array of Tree-constructed objects

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
  // last time, we used a subroutine (interior recursing function),
  // with a closure variable that only changed when a true was found, and was returned at the end

  // I know it's possible to do this by recursing the .contains, though.
  // With reduce?  There was a telltale variable returned?

  // base case
  if (this.value === target) {
    return true;
  }
  else {
    // this.children is an array with at least one Tree object in it
    // if recursion ever returns true gtfo ie return true
    // if recursion returns false move on to the next possibility
    // if the for loop closes return false
    for (var i = 0; i < this.children.length; i++) {
      // recurse
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
