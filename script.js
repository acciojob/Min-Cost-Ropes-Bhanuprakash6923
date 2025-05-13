function mincost(arr) {
    // First, create a min-heap using a priority queue
    let heap = new MinHeap(arr);

    let totalCost = 0;

    // While there is more than one rope left in the heap
    while (heap.size() > 1) {
        // Extract the two smallest ropes
        let rope1 = heap.extractMin();
        let rope2 = heap.extractMin();

        // Cost to connect these two ropes
        let cost = rope1 + rope2;
        totalCost += cost;

        // Insert the combined rope back into the heap
        heap.insert(cost);
    }

    return totalCost;
}

// MinHeap class to manage heap operations
class MinHeap {
    constructor(arr) {
        this.heap = [];
        if (arr) {
            arr.forEach(num => this.insert(num));
        }
    }

    size() {
        return this.heap.length;
    }

    insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    extractMin() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (index < length) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

// Test cases
console.log(mincost([4, 3, 2, 6])); // Expected output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Expected output: 33
