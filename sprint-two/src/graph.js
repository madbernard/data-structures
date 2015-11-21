/*
Graphs are like friend networks, says Brendan

He had big "graph" object (like Facebook)
and then smaller objects that were nodes/"people"
and those people objects had objects within them that
held lists of all their friend connections
*/

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  //needs a storage solution for the nodes...  array?
  //form is this.storage = whatever
  this.storage = [];
  // another array to store edges
  this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  //needs to store a value (push into the storage array)
  this.storage.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  //use underbar!!
  return _.contains(this.storage, node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var i = _.indexOf(this.storage, node);
  this.storage[i] = null;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  //return _.contains(this.edges, [fromNode, toNode]);
  // ^this doesnt work because no two arrays are ever going to === each other
  for( var i = 0; i < this.edges.length; i++){
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode){
      return true;
    }
  }
  return false;

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
  this.edges.push([toNode, fromNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  // navigate through the edges array, to find the edge that matches
  for( var i = 0; i < this.edges.length; i++){
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode){
      // splice the item out. the index is i
      this.edges.splice(i);
    /*
     consider the connection to the other direction later
    */

    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, cb);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

