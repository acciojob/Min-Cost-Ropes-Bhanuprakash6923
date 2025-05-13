function mincost(arr) {
    // Helper function to build a Min-Heap (priority queue)
    function buildMinHeap(arr) {
        arr.sort((a, b) => a - b); // Sorting array to simulate the heap behavior
    }

    // If there's only one rope, no cost to connect
    if (arr.length === 1) return 0;

    // Step 1: Create a min-heap using the array of ropes
    buildMinHeap(arr);
    
    let totalCost = 0;
    
    // Step 2: Repeatedly combine the two shortest ropes
    while (arr.length > 1) {
        // Extract the two smallest ropes (first two elements in sorted array)
        let rope1 = arr.shift();  // Remove and get the first element
        let rope2 = arr.shift();  // Remove and get the second element

        // Calculate the cost of connecting these two ropes
        let cost = rope1 + rope2;
        totalCost += cost;

        // Insert the combined rope back into the array (sorted insert)
        arr.push(cost);
        arr.sort((a, b) => a - b); // Keep array sorted
    }

    return totalCost;
}

// Test cases
console.log(mincost([4, 3, 2, 6])); // Expected output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Expected output: 33
