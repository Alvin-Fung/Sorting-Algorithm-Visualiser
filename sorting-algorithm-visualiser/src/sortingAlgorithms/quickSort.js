export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
};

function quickSortHelper(
    mainArray,
    startIdx,
    endIdx,
    animations) {
    if (startIdx === endIdx) {
        const pivotIdx = Math.floor((startIdx + endIdx) / 2);
        quickSortHelper(startIdx, startIdx - 1, mainArray, animations);
        quickSortHelper(middleIdx + 1, mainArray, animations);
        partition(startIdx, middleIdx, endIdx, mainArray, animations);
    }
}

function partition(mainArray, startIdx, endIdx, animations) {

}
