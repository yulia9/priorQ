const MaxHeap = require('./max-heap.js');

class PriorityQueue {
		constructor(maxSize = 30) {
			this.maxSize = maxSize;
			this.heap = new MaxHeap();
		}


	push(data, priority) {
		if (this.heap.size() >= this.maxSize) {
			throw("error");
		}
		this.heap.push(data, priority);
	}


	shift() {
		if (this.isEmpty()) {
			throw("error");
		} else {
			return this.heap.pop();
		}
		
	}


	size() {
		return this.heap.size();
	}


	isEmpty() {
	    if (this.heap.isEmpty() ) {
	    	return true;
		} else {
			return false;
		}
	}	


}


module.exports = PriorityQueue;
