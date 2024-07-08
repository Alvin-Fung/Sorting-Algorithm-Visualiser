import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergeSort.js';
import './SortingVisualiser.css';

//Constants
//Change this value for the speed of the animations(In milliseconds).
const ANIMATION_SPEED = 3;

//Change this value for the number of bars(value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

//Main colour of the array bars.
const PRIMARY_COLOUR = 'turquoise';

//Comparison colour for the array bars throughout the animations.
const SECONDARY_COLOUR = 'red';

export default class SortingVisualiser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //Main array.
            array: [],
        };
    }

    componentDidMount() {
        //When this loads for the first time, it will call the resetArray() function.
        this.resetArray();
    }

    //Reused for the generate array button.
    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            //the value of 5 is arbitary but any less may cause for unideal visual representation of the array.
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED);
            }
        }
    }

    // const javaScriptSortedArray = this.state.array
    //     .slice()
    //     .sort((a, b) => a - b);
    // const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
    // console.log(sortedArray);

    // console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));

    quickSort() {
        // const animations = getQuickSortAnimations(this.state.array);
    }

    heapSort() { }

    bubbleSort() { }

    render() {

        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{ height: `${value}px` }}>
                    </div>
                ))}
                <div>
                    <div>
                        <button onClick={() => this.resetArray()}>Generate New Array</button>
                    </div>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    {/* <button onClick={() => this.testSortingAlgorithms()}>Testing Sorting Algorithms</button> */}
                </div>
            </div>
        );
    }
}


//Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range#:~:text=You%20only%20need%20to%20call,max%20(non-inclusive).
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function arraysAreEqual(arrayOne, arrayTwo) {
//     if (arrayOne.length !== arrayTwo.length) return false;
//     for (let i = 0; i < arrayOne.length; i++) {
//         if (arrayOne[i] !== arrayTwo[i])
//             // console.log(arrayOne[i], arrayTwo[i]);
//             return false;
//     }
//     return true;
// }

