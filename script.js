function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Sort the array to simulate a min-heap
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    while (arr.length > 1) {
        // Take two smallest elements
        let first = arr.shift();
        let second = arr.shift();

        let cost = first + second;
        totalCost += cost;

        // Insert back the sum and maintain sorted order
        let inserted = false;
        for (let i = 0; i < arr.length; i++) {
            if (cost < arr[i]) {
                arr.splice(i, 0, cost);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            arr.push(cost);
        }
    }

    return totalCost;
}
