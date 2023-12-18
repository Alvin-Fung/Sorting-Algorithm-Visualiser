export function getMergeSortAnimations(array) {
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
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(auxiliaryArray, startIdx, middleIdx, endIdx, mainArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        //These two values are getting compared for the first time, they're pushed to change their colour.
        animations.push([i, j]);
        //These two values are getting compared for the second time, they're pushed again to revert their colour.
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        //These two values are getting compared for the first time, they're pushed to change their colour.
        animations.push([i, i]);
        //These two values are getting compared for the second time, they're pushed again to revert their colour.
        animations.push([i, j]);
        //The value of index k in the main array gets overwritten with the
        //value of index i in the auxiliary array. 
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}
