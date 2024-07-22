export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
};

function quickSortHelper(mainArray, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
        let pivotIdx = partition(mainArray, startIdx, endIdx, animations);
        quickSortHelper(mainArray, startIdx, pivotIdx - 1, animations);
        quickSortHelper(mainArray, pivotIdx + 1, endIdx, animations);
    }
}

function partition(mainArray, startIdx, endIdx, animations) {
    const pivotValue = mainArray[endIdx];
    let pivotIdx = startIdx;
    for (let i = startIdx; i < endIdx; i++) {
        //Comparisons
        animations.push(["compare", i, endIdx]); //First comparison
        animations.push(["compare", i, endIdx]); //Last(end?) comparison
        if (mainArray[i] < pivotValue) {
            //Swaps
            animations.push(["swap", pivotIdx, i, mainArray[i], mainArray[pivotIdx]]);
            [mainArray[pivotIdx], mainArray[i]] = [mainArray[i], mainArray[pivotIdx]];  //Actual swap
            pivotIdx++;
        }
    }
    animations.push(["swap", pivotIdx, mainArray[endIdx]]);
    animations.push(["swap", endIdx, mainArray[pivotIdx]]);
    //Actual swap
    [mainArray[pivotIdx], mainArray[endIdx]] = [mainArray[endIdx], mainArray[pivotIdx]];
    return pivotIdx;
}
