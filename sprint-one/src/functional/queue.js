var Queue = function(){
  var someInstance = {};
  var count = 0;
  var sizeCounter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count += 1;
    sizeCounter += 1;
  };

  someInstance.dequeue = function(){
    if (sizeCounter) {
      //refer to last key
      var result = storage[count - sizeCounter];
      delete storage[count - sizeCounter];
      sizeCounter -= 1;
      return result;
    }
  };

  someInstance.size = function(){
    return sizeCounter;
  };

  return someInstance;
};



