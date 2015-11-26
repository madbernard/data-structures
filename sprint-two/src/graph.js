

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes.push({name: node, connections: null});
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].name === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
// if this.nodes was an object...  this wouldn't be 2x O(N).  Worth it to lose array's fine aspects?
Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].name === node) {
      this.nodes.splice(i, 1);
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].name === fromNode && this.nodes[i].connections.toNode === toNode) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var fromNodeIndex = null;
  var toNodeIndex = null;

  // check that both fromNode and toNode exist, set up for insertion
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].name === fromNode) {
      fromNodeIndex = i;
    }
    if (this.nodes[i].name === toNode) {
      toNodeIndex = i;
    }
  }

  if (fromNodeIndex && toNodeIndex) {
    this.nodes[fromNodeIndex].connections = {toNode: toNode};
    this.nodes[toNodeIndex].connections = {fromNode: fromNode};
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
// this may work but it depends on addEdge and hasEdge to test it
Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node){
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



