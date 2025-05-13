function mincost(arr) {
    // Create a min-heap using the built-in sort function
    arr.sort((a, b) => a - b);
    
    let totalCost = 0;
    
    // Continue combining the smallest two ropes until one rope is left
    while (arr.length > 1) {
        // Remove the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();
        
        // Calculate the cost to combine them
        let cost = first + second;
        totalCost += cost;
        
        // Insert the combined rope back into the array and maintain the sorted order
        arr.push(cost);
        
        // Re-sort the array after adding the combined rope
        arr.sort((a, b) => a - b);
    }
    
    // Return the total cost to connect all the ropes
    return totalCost;
}
