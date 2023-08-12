// Code your solution in this file!

// Test 1
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

// Test 2 - Solution implemented after experimenting with REPL
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

// Tests 3 - 5
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Tests 6 - 7
function createFareMultiplier(fareMultipler) {
    return (fare) => fare * fareMultipler;
}

// Tests 8 - 9
const fareDoubler = (fare) => createFareMultiplier(2)(fare);

// Tests 10 - 11
const fareTripler = (fare) => createFareMultiplier(3)(fare);

// Tests 12 - 13
function selectDifferentDrivers(arrayOfDrivers, selection) {
    return selection(arrayOfDrivers);
}