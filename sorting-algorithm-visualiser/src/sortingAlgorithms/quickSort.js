export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
};

function quickSortHelper(mainArray, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
        let pivotIdx = partition(mainArray, startIdx, endIdx, animations);
        quickSortHelper(mainArray, startIdx, pivotIdx = 1, animations);
        quickSortHelper(mainArray, pivotIdx + 1, endIdx, animations);
    }
}

function partition(mainArray, startIdx, endIdx, animations) {
    const pivotValue = mainArray[endIdx];
    const pivotIndex = startIdx;
    for (let i = startIdx; i < endIdx; i++) {
        //Comparisons
        animations.push(["compare", i, endIdx]);
        animations.push(["compare", i, endIdx]);
        if (mainArray[i] < pivotValue) {
            //Swaps
            animations.push(["swaps",]);
            animations.push(["swaps",]);
        }
    }
}
