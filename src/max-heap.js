const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this._size = 0;
	}

	push (data, priority) {
		var node = new Node (data, priority);
        this.insertNode(node);
        this.shiftNodeUp(node);   
	}
    
    pop () {
    	if (!this._size) {
			return;	
		}
		var detached = this.detachRoot();
		this.restoreRootFromLastInsertedNode(detached); 
		this.shiftNodeDown(this.root);	
		this._size--;
		return detached.data;
    }
    

	detachRoot() {
		var detached = this.root;
		if (detached === this.parentNodes[0]) {
			this.parentNodes.shift();
		}
		this.root = null;
		return detached;
	}

	restoreRootFromLastInsertedNode(detached) {
		
		var nodeToMove = this.parentNodes.pop();
		this.root = nodeToMove;
		if (nodeToMove.parent) {
			if (nodeToMove.parent.left === nodeToMove) {
				nodeToMove.parent.left = null;
			}
			if (nodeToMove.parent.right === nodeToMove) {
				nodeToMove.parent.right = null;
			}
		}
		this.root.left = detached.left;
		if (this.root.left) {
			this.root.left.parent = this.root;
		}
		this.root.right = detached.right;
		if (this.root.right) {
			this.root.right.parent = this.root;
		} 
		this.root.parent = null;
		this.parentNodes.unshift(this.root);	
	}


	size() {
		return this._size;
	}

	isEmpty() {
		if (this._size === 0) {
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
		if (!this._size) {
			this.root = node;
			this.parentNodes[0] = node;
		} else if (this.size) {
			this.parentNodes[0].appendChild(node);
			this.parentNodes[this.parentNodes.length] = node;
			if (this.parentNodes[0].right) {
				this.parentNodes.shift();
			}
		}
		this._size++;
	}


	shiftNodeUp(node) {
		if (this.root === node) {
			return;
		}
		if (node.parent.priority < node.priority) {
			if (this.root === node.parent) {
				this.root = node;
			}
			var indexChild = this.parentNodes.lastIndexOf(node);
			var indexParent = this.parentNodes.lastIndexOf(node.parent);
			if (indexChild !== -1) {
				this.parentNodes[indexChild] = node.parent;
			}
			if (indexParent !== -1) {
				this.parentNodes[indexParent] = node;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		}	
	}
	

	shiftNodeDown(node) {
		if (node.left && node.right) {
			if (node.left.priority > node.right.priority && node.left.priority > node.priority) {
				if (this.root === node) {
					this.root = node.left;
				}
				var indexParent = this.parentNodes.lastIndexOf(node);
				var indexChild = this.parentNodes.lastIndexOf(node.left);
				if (indexChild !== -1) {
					this.parentNodes[indexChild] = node;
				}	
				if (indexParent !== -1) {
					this.parentNodes[indexParent] = node.left;
				}
				node.left.swapWithParent();
				this.shiftNodeDown(node);
			} else if (node.right.priority > node.priority) {
				if (this.root === node) {
					this.root = node.right;
				}
				var indexParent = this.parentNodes.lastIndexOf(node);
				var indexChild = this.parentNodes.lastIndexOf(node.right);
				if (indexChild !== -1) {
					this.parentNodes[indexChild] = node;
				}
				if (indexParent !== -1) {
					this.parentNodes[index] = node.right;
				}
				node.right.swapWithParent();
				this.shiftNodeDown(node);
			}

		} else if (node.left && node.left.priority > node.priority) {
			var indexParent = this.parentNodes.lastIndexOf(node);
			var indexChild = this.parentNodes.lastIndexOf(node.left);
			if (indexChild !== -1) {
				this.parentNodes[indexChild] = node;
			}
			if (indexParent !== -1) {
				this.parentNodes[indexParent] = node.left;
			}	
			node.left.swapWithParent();
			this.shiftNodeDown(node);
		}
	}

		
	
}

module.exports = MaxHeap;
