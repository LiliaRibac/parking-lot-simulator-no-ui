"use stric"

const NUMBER_OF_CARS = 5;
const NUMBER_OF_SPACES = 1;


var qWait = [];

var parkingSpaces = [];
// const freeToGo = [];

var spaceOpen = NUMBER_OF_SPACES - parkingSpaces.length;

// var license = lisenceFactory()

function yearRandom(e) {
    var e = Math.floor(Math.random() * 15) + 2020;
    return e;
}

function timeRandom(t) {
    var t = Math.floor(Math.random() * ( 4000 - 1000) + 1000);
    return t;
}

function lisenceFactory(lengthde) {
    var l = ""
    var alfabet = 'ABCDEFGHLJKQWERLTYUIOPMNVCZ0123456789';

    while (l.length < 5) {
        l += alfabet[Math.floor(Math.random() * alfabet.length)];
    }
    return l;

}

function randomModel() {
    let arrModels = ['Ford', 'Toyota', 'Tacoma', 'Jeep', 'Ferrari', 'Camry'];
    return arrModels[Math.floor(Math.random() * arrModels.length)];
}

function randomColor() {
    let arrColor = ['red', 'blue', 'green', 'silver', 'lighgrey', 'lightblue', 'dark', 'yellow', 'white', 'teal'];
    return arrColor[Math.floor(Math.random() * arrColor.length)];
}

function Car(model, color, lisencePlate, year, time) {
    this.model = randomModel();
    this.color = randomColor();
    this.lisencePlate = lisenceFactory();
    this.year = yearRandom();
    this.time = timeRandom()

    this.park = function (car) {
        console.log("park", car);
        parkingSpaces.push(car)


        setTimeout(function(){car.leave(car)}, this.time);
    }

    this.leave = function (car) {
        console.log("Leave!", car)
        parkingSpaces.pop(car);

        Attendant()
    }
}

function allCarsRandom() {
    for (i = 0; i < NUMBER_OF_CARS; i++) {
        let car = new Car();
        qWait.push(car)
    }
    console.log(qWait)
    return qWait;
}


// Parking lot functions

function Attendant() {
    for (let i = 0; i < NUMBER_OF_SPACES; i++) {
        if (spaceOpen !== 0 && qWait.length !== 0) {
            var car = qWait.pop()

            car.park(car)
            
        } else {
            console.log('No more spaces available!')
        }
    }

}

// var timeoutId = setTimeout(Car, 1000);
// clearTimeout(timeoutId);

// var intervalId = setInterval(allCarsRandom, 1000)
// clearInterval(intervalId);

// let timer = setTimeout(function myTimer() {
//     increment();
   

//     timer = setTimeout(myTimer, 1000);
// }, 1000);


// let's cancel after 7 seconds
// setTimeout(() => {
//     console.log('Cancelling');
//     clearTimeout(timer);
// }, 10000);


allCarsRandom();
Attendant()
console.log(qWait);