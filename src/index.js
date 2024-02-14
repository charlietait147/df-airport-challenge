import Airport from "./airport.js";
import Airplane from "./airplane.js";

//Tests for User Story 1 + 3
let airport = new Airport();
console.log(`The max capacity is ${airport.maxCapacity}`);
let airplane = new Airplane("1");
console.log(airport.addPlane(airplane));
console.log(airport.airplanes.length);
let airplane2 = new Airplane("2");
console.log(airport.addPlane(airplane2));
console.log(airport.airplanes.length);

//Tests for User Story 2
console.log("============");
airport.maxCapacity = 5;
console.log(`The max capacity is ${airport.maxCapacity}`);
console.log(airport.addPlane(airplane));
console.log(airport.airplanes.length);
console.log(airport.addPlane(airplane2));

//Tests for User Story 4
console.log("============");
airplane = new Airplane("1");
airplane2 = new Airplane("1");
console.log(airport.landPlane(airplane2));

//Tests for User Story 5
console.log("============");
airplane = new Airplane("1");
airport.addPlane(airplane);
console.log(airport.isClearForTakeOff(airplane));

//Test for User Story 6
console.log("============");
console.log(`The weather is ${airport.weather}`);
console.log(airport.isStormyToLand(airplane));

//Test for User Story 7
console.log("============");
console.log(`The weather is ${airport.weather}`);
console.log(airport.isStormyToTakeOff(airplane));





