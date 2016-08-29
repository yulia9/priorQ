class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {

		if (!this.left) {
			this.left = node;
			node.parent = this;
		} else if (!this.right) {
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
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

     swapWithParent ()	{	
		if (!this.parent) {
			return;
		}
		var parent = this.parent;
		if (parent.parent) {
			if (parent.parent.left === parent) {
				parent.parent.left = this;
			} else {
				parent.parent.right = this;
			}
			this.parent = parent.parent;
			
		} else {
			this.parent = null;
		}

		var leftChild = this.left;
		var rightChild = this.right;
		if (parent.left === this) {
			this.left = parent;
			this.right = parent.right;
			if (parent.right) {
				parent.right.parent = this;
			}
		} else {
			this.left = parent.left;
			this.right = parent;
			if (parent.left) {
				parent.left.parent = this;
			}
		}
		parent.parent = this;
		parent.left = leftChild;
		parent.right = rightChild;
		if (parent.right) {
			parent.right.parent = parent;
		}
		if (parent.left) {
			parent.left.parent = parent;
		}
	} 
	
}

module.exports = Node;
