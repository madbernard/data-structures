var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (!list.head) {
      list.head = list.tail = listNode(value);
    }
    else {
      list.tail.next = list.tail = listNode(value);
    }
  };

  list.removeHead = function(){
    if (!list.tail) {
      return;
    }
    else {
      var holder = list.head;
      list.head = list.head.next;
      return holder.value;
    }
  };

  list.contains = function(target){
    // loop over list
    // for loop structure: first bit is start
    // second bit is place where thrown out of loop
    // third bit is what to do at the end of each loop step
    for (var i = list.head; i !== null; i = i.next) {
      if (i.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var listNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
