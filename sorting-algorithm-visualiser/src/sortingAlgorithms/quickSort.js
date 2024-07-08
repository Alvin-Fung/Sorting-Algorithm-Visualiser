export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
};

function quickSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray, //Used to be swapped out and have valued overidden
    animations) {

}
