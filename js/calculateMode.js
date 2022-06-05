    /*
    1. Iterate through array and store count of its elements in an object.
    2. Find the key with the max count value in the object.
    3. Find all keys with values that equal the max and push them to an array.
    4. Return the array.
    */

exports.calculateMode = (array) => {

    const elementCounts = {};
    let maxCount = 0;
    const mostFreqElements = [];
    let onlyNumbers = true;

    // Store count of elements
    for (const element of array) {
        // Check if array has non-numerics
        if (typeof element !== 'number') {
            onlyNumbers = false;
        // Add element as key or increment if is already key
        }
        if (elementCounts.hasOwnProperty(element)) {
            elementCounts[element]++;
        } else {
            elementCounts[element] = 1;
        }
    }

    // Find the max count of all values in object
    const counts = Object.values(elementCounts);
    maxCount = Math.max(...counts);

    // Find keys where value === maxCount (switch array w/only numbers back to numbers)
    for (const key in elementCounts) {
        if (onlyNumbers === false) {
            if (elementCounts[key] === maxCount) {
                mostFreqElements.push(key);
            }
        } else {
            if (elementCounts[key] === maxCount) {
                mostFreqElements.push(+key);
            }
        }
    }

    return mostFreqElements;
}

// console.log(calculateMode(["who", "what", "where", "who"]))
// console.log(calculateMode([1,"2",3, 3]))
// console.log(calculateMode([1,2,3, 3]))