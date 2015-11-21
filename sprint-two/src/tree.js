var Tree = function(value){
  var newTree = _.extend({}, treeMethods);
  newTree.value = value;    //creates a key value pair with value as parameter
  newTree.children = [];
//  newTree.counter = 0;

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

  function search (node){
  //  var temp = [];
    //base case if the value is the target or if there are no children
    // this is two if statements
    if (node.value === target){
      found = true;
      return;
    }
    // if (node.children.length === 0){
    //   return false;
    // }
    // //recursive case if there are children
    for ( var i = 0; i < node.children.length; i++){
      console.log(node.children[i]);
      search(node.children[i]);
    }


  //   if (node.value) {
  //     if (node.value === target) {
  //       temp.push(true);
  //     }
  //     else {
  //       node = this.children;
  //       //trying to iterate through each one of the children
  //       for (var i = 0; i < this.children.length; i++) {

  //         search(node[i]);
  //         //temp = temp.concat(result);
  //       }
  //     }
  //     //find if any of the results in temp = true
  //     return _.contains(temp, true);
  //   }
  //   return false;
  }
  search(this)
  return found;
};




  // var tempCounter = this.counter;

  // while (this.children.value) {
  //   if (this[tempCounter].value === target) {
  //     return true;
  //   }
  // }
  // for (var i = tempCounter - 1; i > -1; i--) {
  //   if (this.children[tempCounter].value === target) {
  //     return true;
  //   }
  // }
  //  return false;


//        a
//   x          y
// i   j      k   l





/*
 * Complexity: What is the time complexity of the above functions?
 */
