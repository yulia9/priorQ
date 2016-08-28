const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this._size = 0;
		}

	push(data, priority) {
		this.insertNode (new Node (data, priority)) ;
		this.shiftNodeUp(new Node (data, priority)) ;
	}
    
    pop () {
    	
    	}
    



	detachRoot() {
		var root = this.root ;
		if (root = this.parentNodes[0]) {
			delete this.parentNodes[0] ;
		} 
		this.root = null;
		return root ;
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	
	
	}

	size() {
		
	}

	isEmpty() {
		if (this._size === 0) {
			return true ;
		} else {
			return false ;
		}
	}

	clear() {
		this.root = null ;
		this.parentNodes = [] ;
		this._size = 0 ;
		
	}

	insertNode(node) {
		if (this._size === 0) {
			this.root = node ;
			this.parentNodes[0] = node ;
		} else {
			this.parentNodes[0].appendChild(node) ;
			this.parentNodes.push(node) ;
			if (this.parentNodes[0].right) {
				delete this.parentNodes[0] ;
			}
		}
		this._size++ ;
	}

	shiftNodeUp(node) {
		if (this.root === node) {
			return ;
		} 
		if (node.parent.priority < node.priority) {
			if (this.root === node.parent) {
				this.root = node;
			}
			
		var index = this.parentNodes.indexOf(node);
			var indexParent = this.parentNodes.indexOf(node.parent);
			if (index !== -1) {
				this.parentNodes[index] = node.parent;
				if (indexParent !== -1) {
					this.parentNodes[indexParent] = node;
				}
			}
			
		node.swapWithParent() ;
		this.shiftNodeUp(node);
		}
	
	}
	
	

	shiftNodeDown(node) {
		

	}
	
}

module.exports = MaxHeap;
