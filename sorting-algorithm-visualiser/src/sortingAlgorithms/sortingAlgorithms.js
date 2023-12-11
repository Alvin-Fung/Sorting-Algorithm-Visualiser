export function mergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
};

/*Apparently algoexpert.io/clem website won't allow me to understand this 
tutorial's version of a merge sort as it's a paid product :(*/
function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray, //Used to be swapped out and have valued overidden
    animations
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(mainArray, startIdx, middleIdx, auxiliaryArray, animations);
    mergeSortHelper(mainArray, middleIdx + 1, endIdx, auxiliaryArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        const animation = {};
        animation.comparison = [i, j]; //These are the two values that will be coloured at any given time.
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animation.swap = [k, i];
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animation.swap = [k, j];
            mainArray[k++] = auxiliaryArray[j++];
        }
        animations.push(animation);
    }
    while (i <= middleIdx) {
        animations.push({
            comparison: [i, i],
            swap: [k, i],
        });
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push({
            comparison: [j, j],
            swap: [k, j],
        });
        mainArray[k++] = auxiliaryArray[j++];
    }
}
