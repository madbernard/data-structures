/*  PLAN:

Hash table steps:
1. hash the key:  use hashing function to make the key into a number
2. modulo this number versus the array length of the storage array:
---this is the bucket it will go into
3. the bucket arrays hold tuple arrays that hold the key in position 0 and the value in position 1
4. if there are two keys that the hashing function gives the same number for,
  4a. we need to look at each tuple[0] in the bucket they're both aimed at
  4b. if they're the same, do whatever (like, overwrite the value at tuple[1], or return the value)
  4c. otherwise store the new tuple in teh bucket
5. hash table has to grow and shrink when buckets are mostly full or mostly empty
  5a. this requires "rehashing" all teh keys to put them in a new bucket
*/


var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // hashing below. i is the index of the storage array
  // which is a storage array
  var i = getIndexBelowMaxForKey(k, this._limit);
  // each time we arrive at an index in storage, check if there is a bucket array
  if (!this._storage[i]) {
    // if there is no bucket array, make/"initialize" one empty bucket array
    this._storage[i] = [];
  }
  // store within buckt array the new tuple (key and value)
  //check keys in tuples to see if they are the same string
  for (var x = 0; x < this._storage[i].length; x++) {
    // until we find the one with a matching key
    if (this._storage[i][x][0] === k) {
      //overwrite value if keys match
      this._storage[i][x][1] = v;
    }
  }

  this._storage[i].push([k, v]);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // iterate over all items in the bucket (this._storage[i])
  for (var x = 0; x < this._storage[i].length; x++) {
    // until we find the one with a matching key
    if (this._storage[i][x][0] === k) {
      // return the value of that tuple
      return this._storage[i][x][1];
    }

  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //similar to retrieve on 37
  //but instead of v, use null
  for (var x = 0; x < this._storage[i].length; x++) {
    // until we find the one with a matching key
    if (this._storage[i][x][0] === k) {
      //overwrite value if keys match
      this._storage[i][x][1] = null;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
