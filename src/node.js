class Node {
	constructor(data, priority) {
	this.data = data;
	this.priority = priority;
	this.parent=null;
	this.left=null;
	this.right=null;
	}

	appendChild(node) {

	if (this.parent==null) {
		this.parent=node
	}

	if (this.left==null) {
		this.left=node;
		node.parent=this
		} else {
			if (this.right==null) {
				this.right=node;
				node.parent=this
			} 
			
		}
	}


	

	removeChild(node) {
		if (this.left==node) {
			this.left=null;
			node.parent=null
		}
		else {
			if (this.right==node) {
			this.right=null;
			node.parent=null
			}
			else { throw ("error") }
	   		 }

	}

	remove() {
		if(this.parent!=null) {
		this.parent.removeChild(this)}

	}

	swapWithParent() {
		}
	}

module.exports = Node;
