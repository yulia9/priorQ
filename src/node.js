class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {

		if (this.left === null) {
			this.left = node;
			node.parent = this;
		} else if (this.right === null) {
			this.right = node;
			node.parent = this;
		}
	}


	

	removeChild(node) {
		if (this.left === node) {
			this.left = null;
			node.parent = null;
		} else if (this.right === node) {
			this.right = null;
			node.parent = null;
		} else {
			throw ("error"); 
		}
			 
	}

	remove() {
		if (this.parent !== null) {
			this.parent.removeChild(this);
		}

	}
     swapWithParent ()	{	
		if (this.parent === null) {
			return;
		}
		var parent = this.parent;
		var left = this.left;
		var right = this.right;
		if (parent.parent !== null) {
			if (parent.parent.left === parent) {
				parent.parent.left = this;
			} else {
				parent.parent.right = this;
			}
			this.parent = parent.parent;
			
		} else {
			this.parent = null;
		}
		if (parent.left === this) {
			this.left = parent;
			this.right = parent.right;
			parent.parent = this;
			parent.left = left;
			if (parent.right !== null) {
				parent.right.parent = this;
			}
		} else {
			this.left = parent.left;
			this.right = parent;
			parent.parent = this;
			parent.right = left;
			if (parent.left !== null) {
				parent.left.parent = this;
			}
		}

	} 
	
}

module.exports = Node;
