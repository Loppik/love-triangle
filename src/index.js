/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let first, second, third, count = 0, res;
    for(let i = 0; i < preferences.length; i++) {
        if (preferences[i] === undefined) {
        	continue;
        }
        first = preferences[i];
        second = preferences[first - 1];
        third = preferences[second - 1];
        if (third - 1 == i && i != (first - 1)) {
            count += 1;
            delete preferences[i];
            delete preferences[first - 1];
            delete preferences[second - 1];
        }
    }
    return count;
};

/*function getLoveTrianglesCount(preferences = [3,3,3,3,3,3,3,3]) {
    let first, second, third, count = 0, res;
    for(let i = 0; i < preferences.length; i++) {
        if (preferences[i] === undefined) {
            continue;
        }
        first = preferences[i];
        second = preferences[first - 1];
        third = preferences[second - 1];
        if (third - 1 == i && i != (first - 1) && i != (second - 1) && (first - 1) != (second - 1)) {
        	//console.log(i + "-" + (first-1) + "-" + (second - 1));f
            count += 1;
            delete preferences[i];
            delete preferences[first - 1];
            delete preferences[second - 1];
        }
    }
    return count;
};

console.log(getLoveTrianglesCount());*/

