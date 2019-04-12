"use stric"

const NUMBER_OF_CARS = 100;
const NUMBER_OF_SPACES = 10;


var qWait = [];
var parkingSpaces = [];
var freeToGo = [];

function spaceOpen() {

    return (NUMBER_OF_SPACES - parkingSpaces.length);
}

// var license = lisenceFactory()

function yearRandom() {
    var e = Math.floor(Math.random() * 6) + 2014;
    return e;
}

function timeRandom() {
    var t = Math.floor(Math.random() * 4000) + 1000;
    return t;
}

function lisenceFactory(lengthde) {
    var l = "";
    var alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

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

function Car() {
    this.model = randomModel();
    this.color = randomColor();
    this.lisencePlate = lisenceFactory();
    this.year = yearRandom();
    this.time = timeRandom();



    this.park = function () {

        parkingSpaces.push(this);


        setTimeout(function (e) {
            e.leave();
        }, this.time, this);

        //   console.log(parkingSpaces)
    }

    this.leave = function () {
        let plateNumbers = parkingSpaces.map(function(x) {
            return x.lisencePlate; 
        })
        
        let position =plateNumbers.indexOf(this.lisencePlate);
        let car = parkingSpaces.splice(position,1);
        freeToGo.push(car);
        console.table(this);
        console.count("leave()");
        Attendant();
    }
}

function allCarsRandom() {
    for (i = 0; i < NUMBER_OF_CARS; i++) {
        let car = new Car();
        qWait.push(car);
    }
    // console.log(qWait)
    return qWait;
}


// Parking lot functions

function Attendant() {
    for (let i = 0; i < NUMBER_OF_SPACES; i++) {
        if (spaceOpen() !== 0 && qWait.length !== 0) {
            var car = qWait.pop();

            car.park(car);

        } else {

            // console.log('No more spaces available!')
        }
    }

}
function allCarsGone(){
    let  y = qWait.length;
    let  z = parkingSpaces.length;
    if(z === 0 && y === 0){
        clearInterval(intervalId);
    }
}

allCarsRandom();
Attendant();
let intervalId = setInterval(function() {
    console.clear();
    console.log(`Queued: ${qWait.length}`);
    console.log(`Parked: ${parkingSpaces.length}`);
    console.log(`Departed: ${freeToGo.length}`);
    console.log(qWait);
    console.log(parkingSpaces);
    console.log(freeToGo);
    allCarsGone();
    
}, 1450);
//  console.log(qWait);