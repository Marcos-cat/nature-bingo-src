function daysSinceNewYear() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const diffInTime = now.getTime() - startOfYear.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    return diffInDays;
}

/** @param {number} n */
function xorShift(n) {
    n ^= n << 13;
    n ^= n >> 17;
    n ^= n << 5;
    return n;
}

/** @param {number} seed */
function seededRandom(seed) {
    const number = xorShift(seed);

    return {
        number: Math.abs(number % 10000) / 10000,
        next: () => seededRandom(number),
    };
}

/**
 * Takes an array and returns the same array in a random order without modifying
 * the original array
 * @template T
 * @param {readonly T[]|T[]} arr
 * @returns {T[]}
 */
function dailyShuffle(arr) {
    let rand = seededRandom(daysSinceNewYear());
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
        rand = rand.next();
        const j = Math.floor(rand.number * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Makes a grid of sights in a random order per day, and puts tree in the middle
 * @param {readonly string[]} sights
 */
export function board(sights) {
    const GRID_SIZE = 5;
    let sightsCopy = dailyShuffle(sights).slice(0, GRID_SIZE * GRID_SIZE);

    const middle = (GRID_SIZE + 1) * Math.floor(GRID_SIZE / 2);

    sightsCopy[middle] = 'tree';

    return sightsCopy;
}
