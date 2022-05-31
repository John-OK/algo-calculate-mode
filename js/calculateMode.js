const calculateMode = (array) => {
    /*
    1. Iterate through array and store count of its elements in an object.
    2. Find the key with the max count value in the object.
    3. Find all keys with values that equal the max and push them to an array.
    4. Return the array.
    */

    const elementCounts = {};
    let maxCount = 0;
    const mostFreqElements = [];

    // Store count of elements
    for (const element of array) {
        if (elementCounts.hasOwnProperty(element)) {
            elementCounts[element]++;
        } else {
            elementCounts[element] = 1;
        }
    }

    // Find the max count
    const counts = Object.values(elementCounts);
    maxCount = Math.max(...counts);

    // Find keys where value == maxCount
    for (const key in elementCounts) {
        if (elementCounts[key] == maxCount) {
            mostFreqElements.push(key);
        }
    }

    // If mostFreqElements only contains numbers, change number strings to numbers

    return mostFreqElements;
}
console.log(calculateMode(["who", "what", "where", "who"]))