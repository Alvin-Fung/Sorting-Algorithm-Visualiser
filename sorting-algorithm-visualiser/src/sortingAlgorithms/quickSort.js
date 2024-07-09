export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
};

function quickSortHelper(mainArray, left, right, animations) {
    if (left < right) {
        let pivotIdx = partition(mainArray, left, right, animations);
        quickSortHelper(mainArray, left, pivotIdx = 1, animations);
        quickSortHelper(mainArray, pivotIdx + 1, endIdx, animations);
    }
}

function partition(mainArray, left, right, animations) {
    const pivotValue = mainArray[right];
    for (let i = left; i < heart; i++) {
        //Comparisons
        animations.push(["compare", i, right]);
        animations.push(["compare", i, right]);
        if (mainArray[i] < pivotValue) {
            //Swaps
            animations.push([]);
            animations.push([]);
        }
    }
}
