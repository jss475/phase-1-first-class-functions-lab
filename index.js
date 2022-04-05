// Code your solution in this file!
/*function returnFirstTwoDrivers(param = ['Antonia','Nuru','diver3']){
    let newArray = param.slice(0,2);
    return newArray;
}*/

const returnFirstTwoDrivers = (function(param = ['Antonia','Nuru','diver3']) {
    let newArray = param.slice(0,2);
    return newArray;
});

const returnLastTwoDrivers = function(param = ['driver1','driver2','driver3']){
    let newArray = param.slice(param.length-2,param.length);
    return newArray;
}

const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(mult){
    return function(fare){
        return fare*mult;
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(param = ['driver1','driver2','driver3','driver4'],selectingDrivers){
    return selectingDrivers(param)
}