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
      //capture former tail

      list.tail.next = linkedListNode(value);
      //update the former next value to point to the new tail


    }
    //else case is the list has 0 things in it
    else {
      list.head = linkedListNode(value);
      list.tail = list.head;
      list.head.next = list.tail;
      headCounter +=1;
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
      return formerHead.value;
    }
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
