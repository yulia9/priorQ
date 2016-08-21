const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize=30) {
    this.maxSize=maxSize;
    this.heap=new MaxHeap;
    this._size=0;
	}

	push(data, priority) {

		if (data<this.maxSize) {
			this.heap.push (data, priority);
			this._size++
		}
	    else {throw ("error")}

	}

	shift() {
		if (this._size != 0) {
		this.heap. pop();
		this._size--;
		return this.heap. pop()
		}
		else {throw ("error")}
	}

	size() {
		return this._size

       
	}

	isEmpty() {
		if (this._size==0) {
			return true
		}
		else {return false}
				}
}

module.exports = PriorityQueue;
