const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		

	}

	push(data, priority) {
		var node = new Node (data, priority);
        this.insertNode(node);
        this.shiftNodeUp(node);
       
	}
    
    pop () {
    	if (this.root!=null) {
    		var currentNode = this.root;
    		return currentNode.data}
    		this.detachRoot();
    		
    	
    }



	detachRoot() {
		var currentNode=this.root;
		this.root=null;
		return currentNode;
		
	}

	restoreRootFromLastInsertedNode(detached) {
		var detached=this.detachRoot();
		var lastInsertedNode = this.push();
		lastInsertedNode= detached;
	
	}

	size() {
		return this.parentNodes.length
	}

	isEmpty() {
		if (this.root == null){
			return true}
		else {
		    return false}
	}

	clear() {
		var currentNode=this.root;
		this.root=null;
		this.parentNodes=[]
		
	}

	insertNode(node) {
		if (this.root==null) {
			this.root = node;
			this.parentNodes[0]=node;
			
		}
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
