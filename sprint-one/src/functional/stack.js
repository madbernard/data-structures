var Stack = function(){
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    count +=1;  //every time we push one, the size increases
     //create a key value pair within storage. we need to add the value to storage
     storage.count = value;  //storage has now a property and a value attached to that property

  };

  someInstance.pop = function(){

    var result = storage.count;  //get the results (value) stored
    delete storage.count;//delete the key value pair
    //return the result. we will put this at the bottom

    if (count) {  //this will make sure that the count stops at zero
      count -=1;  //every time we push one, the size decreases
    }
    return result;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
