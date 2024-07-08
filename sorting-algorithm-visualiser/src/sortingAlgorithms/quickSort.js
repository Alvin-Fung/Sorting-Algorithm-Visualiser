export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
};

function quickSortHelper(
    mainArray,
    startIdx,
    endIdx,
    animations) {
    if (startIdx === endIdx) {
        const pivotIdx = partition(mainArray, startIdx, endIdx, animations);
        quickSortHelper(startIdx, startIdx - 1, mainArray, animations);
        quickSortHelper(middleIdx + 1, mainArray, animations);
        partition(startIdx, middleIdx, endIdx, mainArray, animations);
    }
}

function partition(mainArray, startIdx, endIdx, animations) {
}
