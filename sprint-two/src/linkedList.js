var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  headCounter = 0;
  tailCounter = 0;


  list.addToTail = function(value){
    tailCounter +=1;
    //if case is where the list has 1 or more things in it
    if (list.tail){
      //update the former next value to point to the new tail
      list.tail.next = linkedListNode(value);
      //assign the new tail ! BAM!
      list.tail = list.tail.next;
    }
    //else case is the list has 0 things in it
    else {
      list.head = linkedListNode(value);
      list.tail = list.head;
      headCounter += 1;
    }
  };

  list.removeHead = function(){

    // save the current value of the head as formerhead
    // go to the next node (node.next)
    // reassign (node.next) to be list.head
    // return former head
    if (list.head){
      var formerHead = list.head;
      list.head = formerHead.next;
      // counters?
      return formerHead.value;
    }
  };

  list.contains = function(target){
    // set up a temp variable that points to the head
    // set up a while loop (while we are traversing the collection of nodes
    // i.e we are nto at the end...)
    // return true if the value in that temp matches target.
    // else, return false when temp has hit the tail or there are no nodes (temp = null).

    var temp = list.head;
    while ( temp ) {
      if (temp.value === target) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  };

  return list;
};

var linkedListNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
