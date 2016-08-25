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
        this.shiftNodeUp(node, true);
       
	}
    
    pop () {
    	if (this._size === null) {
			return;	
			}
	   else if (this._size) {
			this.parentNodes.pop();
			return this.parentNodes.pop();
			}
            this.restoreRootFromLastInsertedNode(detached); 
			this.shiftNodeDown(this.root);
			return detached.data;
    	}
    



	detachRoot() {
		var currentNode = this.root; 
		if (this.parentNodes[0] === this.root) {
		this.parentNodes.shift ();
	    }
		this.root = null;
		return currentNode;
	}

	restoreRootFromLastInsertedNode(detached) {
		
		var lastInsertedNode =  this.parentNodes.pop (); 

	    if (this.root !== null) {
            detached =  lastInsertedNode;
			this.root = detached ;
			
			if (lastInsertedNode.parent.left === lastInsertedNode ) {
				lastInsertedNode.parent.left = null;
			} else  {
				lastInsertedNode.parent.right = null;
			}
			
			if (detached.left !== null) {
			detached.left.parent = this.root;
			this.root.left = detached.left;
			}
			if (detached.right !== null) {
			detached.right.parent = this.root;
			this.root.right = detached.right;
			}
			}
			this._size--;
	        this.parentNodes.shift();
			this.parentNodes.unshift(lastInsertedNode)
	
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

	shiftNodeUp(node,isFirstCall) {
	
	if (this.root === node) {
			return;
		}
		if (isFirstCall) {
			this.parentNodes[this.parentNodes.length - 1] = node.parent;
		} 
		var index = this.parentNodes.indexOf(node.parent);
		if (index !== -1) {
			this.parentNodes[index] = node;
		}
		if (node.parent.priority < node.priority) {
			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}
	
	

	shiftNodeDown(node) {
		if (this.root === node) {
			return;
		}
		if (node.left !== null) {
			if (node.right !== null) {
				if (node.right.priority > node.left.priority) {
				var maxNodeChildPriority = node.right.priority;
				var maxNodeChild = node.right;
				} else {
				var maxNodeChildPriority = node.left.priority;
				var maxNodeChild = node.left;
				}
		   } else {
				var maxNodeChildPriority = node.left.priority;
				var maxNodeChild = node.left;
				}
		 }
		 if (node.priority < maxNodeChildPriority) {
			maxNodeChild.swapWithParent();
		 }
		
		this.shiftNodeDown(node) 

		}
	
}

module.exports = MaxHeap;
