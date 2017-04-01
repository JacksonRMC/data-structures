

// Instantiate a new graph
var Graph = function(node) {
	this.nodeList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	var nodeName = node;
	this.nodeList[node] = new GraphNode(node)
	//console.log(this.nodeList)
	
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	var result = false;	
	for(var key in this.nodeList){
		if(this.nodeList[key].value === node){
			return true;
		}
	}
	return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var result;	
	for(var key in this.nodeList){
		if(this.nodeList[key].value === node){
			delete this.nodeList[key];
		}
	}

	for(var key in this.nodeList){
		//console.log(this.nodeList)
		for(var i = 0 ; i < this.nodeList[key].edgeList.length; i++ ){
			if(this.nodeList[key].edgeList[i] === node){				
				this.nodeList[key].edgeList.splice(i, 1);
			}
		}
	}

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var result = false;
	var result2 = false;
	
	for(var i = 0 ; i < this.nodeList[fromNode].edgeList.length; i++ ){
		if (this.nodeList[fromNode].edgeList[i] === toNode){
			result = true;
		}
	}
	for (var i = 0; i < this.nodeList[toNode].edgeList.length; i++) {
		if(this.nodeList[toNode].edgeList[i] === fromNode){
			//console.log(this.nodeList[toNode].edgeList[i])
			result2 = true;
		}
	}
	
	if (result2 && result){
		return true;
	} else {
		return false;
	}
	
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.nodeList[fromNode].edgeList.push(toNode);
	this.nodeList[toNode].edgeList.push(fromNode);
	// console.log(this.nodeList)
	//.push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

for(var i = 0 ; i < this.nodeList[fromNode].edgeList.length; i++ ){
	if (this.nodeList[fromNode].edgeList[i] === toNode){
			this.nodeList[fromNode].edgeList.splice(i, 1);
		}
	}
	for (var i = 0; i < this.nodeList[toNode].edgeList.length; i++) {
		if(this.nodeList[toNode].edgeList[i] === fromNode){
			this.nodeList[toNode].edgeList.splice(i, 1);
		}
	}

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var GraphNode = function(value) {
//  var childArray = [];
  this.value = value;
 	//console.log(node.value);
  this.edgeList = [];
 	//console.log(node.edgeList);
// 	console.log(node);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


