function solution(S) {
    const N = S.length; // How long the road is
    let prefixX = new Array(N + 1).fill(0); // Box to keep track of "x" potholes
    let prefixY = new Array(N + 1).fill(0); // Box to keep track of "y" potholes

    // Walk down the road
    for (let i = 0; i < N; i++) {
        prefixX[i + 1] = prefixX[i]; // Carry over the count of "x" potholes
        prefixY[i + 1] = prefixY[i]; // Carry over the count of "y" potholes

        if (S[i] === 'x') {
            prefixX[i + 1] += 1; // If this piece has an "x" pothole, count it
        }
        if (S[i] === 'y') {
            prefixY[i + 1] += 1; // If this piece has a "y" pothole, count it
        }
    }

    let countSplits = 0; // Start counting good splits

    // Try to split the road at every possible place
    for (let i = 1; i < N; i++) {
        let leftX = prefixX[i]; // Count of "x" potholes on the left side
        let leftY = prefixY[i]; // Count of "y" potholes on the left side
        let rightX = prefixX[N] - prefixX[i]; // Count of "x" potholes on the right side
        let rightY = prefixY[N] - prefixY[i]; // Count of "y" potholes on the right side

        // If left side or right side has equal "x" and "y" potholes, it's a good split
        if (leftX === leftY || rightX === rightY) {
            countSplits++; // Count this split as good
        }
    }

    return countSplits; // Tell how many good splits we found
}

// Test cases to see how it works
console.log(solution("ayxbx"));  // Output: 3
console.log(solution("xzzzy"));  // Output: 0
console.log(solution("toyxmy")); // Output: 5
console.log(solution("apple"));  // Output: 4