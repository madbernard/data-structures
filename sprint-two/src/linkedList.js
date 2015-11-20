var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    if (list.head){
      list.tail = linkedListNode(value);
    }
    else {
      list.head = linkedListNode(value);
      list.tail = list.head;
    }
  };

  list.removeHead = function(){

// save the current value of the head as formerhead
// go to the next node (node.next)
// reassign (node.next) to be list.head
// return former head
   var formerHead = list.head;
   list.head = formerHead.next;
   return formerHead.value;
  };

  list.contains = function(target){
    // loop on the entire list comparying values
    // for loop without i
    //first part is starting position
    //middle part is position at which it is thrown out
    //last part is how it advances

    for ( var x = list.head.value; list.tail.next === null; list.head.next = list.tail) {
      if ( x === target){
        return true;
      }
      else return false;
    }

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
