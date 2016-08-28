/*const MaxHeap = require('./src/max-heap');

const h = new MaxHeap();
window.h = h;*/



const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');
const Queue = require('./src/queue');

const h = new MaxHeap();
window.h = h;
window.q = new Queue();
window.Node = Node;
window.n = new Node();


