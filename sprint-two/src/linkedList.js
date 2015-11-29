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
