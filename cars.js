"use stric"

const NUMBER_OF_CARS = 100;
const NUMBER_OF_SPACES = 10;


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
    var t = Math.floor(Math.random() * 4000) + 1000;
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
    let arrModels = ['Ford', 'toyota', 'tacoma', 'jeep', 'ferrari', 'camry'];
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

    this.park = function (car, space) {
        console.log("park");
        // console.log(this.time)
        setTimeout(this.leave(car, space), this.timer);
    }

    this.leave = function (car, space) {
        console.log("Leave!")
        // space.pop() car out of space array
    }
}

function allCarsRandom() {
    for (i = 0; i < NUMBER_OF_CARS; i++) {
        let car = new Car();
        qWait.push(car)
    }
    return qWait;
}


// Parking lot functions

function Attendant() {
    for (let i = 0; i < NUMBER_OF_SPACES; i++) {
        if (spaceOpen !== 0) {
            var car = qWait.shift()

            parkingSpaces.push(car)
            car.park(car)

        } else {
            alert('No more spaces available!')
        }
    }
}


allCarsRandom();
Attendant()
console.log(parkingSpaces)
// console.log(qWait);
// console.log(new ParkingLot());
// console.log(parkLot)