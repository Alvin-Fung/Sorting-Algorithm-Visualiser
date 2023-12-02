import React from 'react';
import * as sortingAlgorithms from './sortingAlgorithms/sortingAlgorithms';
import './SortingVisualiser.css';

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
        for (let i = 0; i < 310; i++) {
            //the value of 5 is arbitary but any less may cause for unideal visual representation of the array.
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({ array });
    }

    mergeSort() {
        const javaScriptSortedArray = this.state.array.slice().sort();
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

        console.log(sortedArray);
        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    }

    quickSort() { }

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
                        style={{ height: `${value}px` }}></div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }
}


//Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range#:~:text=You%20only%20need%20to%20call,max%20(non-inclusive).
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}

