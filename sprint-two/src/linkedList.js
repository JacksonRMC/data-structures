var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
   //debugger;

    if(list.head === null){
      list.head = Node(value);
    } else {

    }
    list.head.next = Node(value);
    list.tail = Node(value);//  ASSIGNED LITS.TAIL TO NODE SO WE HAVE AANEXT VALUE FOR EACH INCOMING OBJ
    //console.log(list.tail)
      
  };

  list.removeHead = function() {
    //debugger;
    var firstNode = list.head;
    if (firstNode.next === null) {
      list.head = list.tail;
    } else {
       list.head = firstNode.next;
    }
       return firstNode.value;
  };

  list.contains = function(target) {
    var nodeSearch = function(nodeForSearch){
      if(nodeForSearch.next === null){ //CREATED NEW CONDITIONAL TO DEAL WITH VALUES IN NEXT OBJECT
        return false;
      }

      if(nodeForSearch.value === target){  
        return true;
      } else if(nodeForSearch.next.value === target){
        return true;     
      } else {
        return false;
      }

    }
    
    
     return nodeSearch(list.head); //RETURN THE FUNCTION INSTEAD OF CALLING IT RECURSIVELY
     //WAS AWESOME!!!!!
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
