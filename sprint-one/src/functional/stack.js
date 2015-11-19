var Stack = function(){
  var someInstance = {};
  var count = 0;
  var sizeCounter;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    count +=1;                       //every time we push one, the size increases
                                     //create a key value pair within storage. we need to add the value to storage
     storage[count] = value;          //storage has now a property and a value attached to that property

  };

  someInstance.pop = function(){

    if (count) {                     //it will make sure that the count stops at zero
          var result = storage[count];      //get the results (value) stored
    delete storage[count];            //delete the key value pair
      count -=1;
                                     //return the result. we will put it at the bottom
    return result;                   //alternatively, we can delete the first two line of it function
                     //every time we push one, the size decreases
    }
                                     //and replace it line with return storage.count
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};

