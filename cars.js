var parkLot = [];
var qWait = [];
// const freeToGo = [];

let arrColor = ['red', 'blue', 'green', 'silver', 'lighgrey', 'lightblue', 'dark', 'yellow', 'white', 'teal'];
let arrModels = ['Ford', 'toyota', 'tacoma', 'jeep', 'ferrari', 'camry'];

var license = lisenceFactory()

function yearRandom(e) {
    var e = Math.floor(Math.random() * 15) + 2020;
    return e;
}

// function time

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


// var color = arrColor[Math.floor(Math.random() * arrColor.length)];
function randomModel(arrModels) {
    return arrModels[Math.floor(Math.random() * arrModels.length)];
}

// var models = arrModels[Math.floor(Math.random() * arrModels.length)];
function randomColor(arrColor) {
    return arrColor[Math.floor(Math.random() * arrColor.length)];
}

function Car(model, color, lisencePlate, year, time) {
    this.model = randomModel(arrModels); 
    this.color = randomColor(arrColor);
    this.lisencePlate = lisenceFactory();
    this.year = yearRandom();
    this.time = timeRandom()
    
}

console.log(lisenceFactory());

function allCarsRandom() {

    for (i = 0; i < 100; i++) {
        let car = new Car()
        qWait.push(car)
    }
    return qWait;
}
allCarsRandom();
console.log(qWait);

var

function carParked()