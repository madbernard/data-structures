

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes[node] = {
    name: node,
    connections: {}
  };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return !!this.nodes[node];
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  if (!!this.nodes[node]) {
    delete this.nodes[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return !!this.nodes[fromNode].connections[toNode] && !!this.nodes[toNode].connections[fromNode];
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  if (!!this.nodes[fromNode] && !!this.nodes[toNode]) {
    this.nodes[fromNode].connections[toNode] = {
      name: toNode
    };
    this.nodes[toNode].connections[fromNode] = {
      name: fromNode
    };
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  if (!!this.nodes[fromNode] && !!this.nodes[toNode]) {
    delete this.nodes[fromNode].connections[toNode];
    delete this.nodes[toNode].connections[fromNode];
  }
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



