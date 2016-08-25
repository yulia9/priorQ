const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this._size = 0;
		

	}

	push(data, priority) {
		var node = new Node (data, priority);
        this.insertNode(node);
        this.shiftNodeUp(node);
       
	}
    
    pop () {
    	if (this._size === null) {
    		return;
    	} else {
    		this.parentNodes.pop();
    		this._size--;

    	}
    	}
    



	detachRoot() {
		var currentNode = this.root; 
		this.root = null;
		return currentNode;
		
	}

	restoreRootFromLastInsertedNode(detached) {
		this.detachRoot();
		var lastInsertedNode = this.parentNodes.pop();
		this.root = lastInsertedNode;
		this.root.left = this.left;
		this.left.parent = lastInsertedNode;
		delete this.parentNodes.pop()
	
	}

	size() {
		return this._size;
	}

	isEmpty() {
		if (this._size === null){
			return true;
		} else {
		    return false;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this._size = 0;
	}

	insertNode(node) {
		if (this.root === null) {
			this.root = node;
			this.parentNodes[0]=node;
		} else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			if (this.parentNodes[0].right !== null) {
				this.parentNodes.shift();
			}
		}
		this._size++;
	}

	shiftNodeUp(node) {
	
		if (this.root !== node) {
			if (node.parent !== this.root) {
				node.swapWithParent();
			} else {
				this.root = node;
				this.parentNodes[0] = this.root;

			}
			node.shiftNodeUp(node);
			} 
			}
	
	

	shiftNodeDown(node) {
		if (this.root !== null) {
			
		}
	}
}

module.exports = MaxHeap;
