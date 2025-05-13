function mincost(arr) {
    // Step 1: Create a min-heap using the array.
    const heap = new MinPriorityQueue({ priority: (x) => x });
    
    // Step 2: Insert all elements into the heap
    for (let rope of arr) {
        heap.enqueue(rope);
    }

    let totalCost = 0;

    // Step 3: Combine ropes until one rope remains
    while (heap.size() > 1) {
        // Extract two smallest ropes
        const rope1 = heap.dequeue().element;
        const rope2 = heap.dequeue().element;

        // Cost to connect these two ropes
        const cost = rope1 + rope2;
        totalCost += cost;

        // Insert the combined rope back into the heap
        heap.enqueue(cost);
    }

    return totalCost;
}

// Test cases
console.log(mincost([4, 3, 2, 6])); // Expected output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Expected output: 33
