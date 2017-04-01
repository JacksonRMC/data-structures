var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
   // fix me
  	//this an array of subtrees, each child is a node
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
	//takes any value, 
 	
 	//newTree.value = Node(value);
 	this.value = value;
	this.children.push(treeNode(value));
	//console.log(this);
	// .children[0].value).to.equal(5);  <-- FROM TESTER


	// newTree.children.push(Node(value));
	// newTree.target = value;
	//sets that as the target of a node, 

	//and adds that node as a child of the tree
};

treeMethods.contains = function(target) {
	var result = false;
	// debugger;
	
	var find = function(nodeForSearch){
	// FOR OR FOR-EACH <BEGIN>
	if (nodeForSearch.value === target) {
	  	result = true;
	 	} 
	
	if (result === false && nodeForSearch.children.length > 0) {
		nodeForSearch.children.forEach(function(child){
			find(child);
		  })
		}
	  
	  // FOR OR FOR-EACH <END>
	  return;
	}
	find(this);
	return result;
};

// NODE-CREATION FUNCTION HERE
var treeNode = function(value) {
  var newNode = {};
//  var childArray = [];
  newNode.value = value;
 	//console.log(node.value);
  newNode.children = [];
 	//console.log(node.children);
  _.extend(newNode, treeMethods);
  
// 	console.log(node);

  return newNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
