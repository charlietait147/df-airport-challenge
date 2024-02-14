import { assertEquals } from "./test-framework/test-framework.js";
import Airport from "../src/airport.js";
import Airplane from "../src/airplane.js";

/*
An Air Traffic Controller has come with a requirement to determine a maximum capacity
of an airport so that they can determine how many planes can be held in the airport at one time.
*/

/* User Story 1 + 3

As a Air Traffic Controller, I want to add a maximum capacity to the airport,
to ensure that airplanes can't land in the airport if the maximum capacity is reached

*/

//Set up tests


let testName = ``
let expectedOutput, actualOutput, result;

testName = `User Story 1 + 3 - should return when a plane can't be added to the array with maximum capacity reached`


//Arrange
let airport = new Airport(); 
let airplane = new Airplane("1");
let airplane2 = new Airplane("2");
expectedOutput = "Maximum capacity reached, unable to hold another airplane"; 

//Act 
airport.addPlane(airplane);
airport.addPlane(airplane2);
actualOutput = airport.addPlane(airplane2); //Output should equal what happens when I try and add an extra plane beyond capacity.


//Assert
result = assertEquals(actualOutput, expectedOutput);

//Report
console.log(testName);
console.log(`=========`);
console.log(`Test passes: ${result}`);

//Clean up
testName = ``;
actualOutput, expectedOutput, result = undefined;


/* User Story 2 

As an Air Traffic Controller, I want the ability to override the capacity, in case of any emergency.

*/

//Set up test

testName = `User Story 2 - should return that the plane has been added after overriding max capacity`

//Arrange
airport = new Airport();
airport.maxCapacity = 5; // Manually add in a higher max capacity to override max capacity declared.
airplane = new Airplane("1");
airplane2 = new Airplane("2");
expectedOutput = "New plane added, max capacity override"; // New plane should be able to be added now.

//Act
airport.addPlane(airplane);
airport.addPlane(airplane2);
actualOutput = airport.addPlane(airplane2); //Output should equal what happens when I try and add an extra plane beyond capacity.

//Assert
result = assertEquals(actualOutput, expectedOutput);

//Report
console.log(testName);
console.log(`=========`);
console.log(`Test passes: ${result}`);

//Clean up
testName = ``;
actualOutput, expectedOutput, result = undefined;

/* User Story 4

As an Air Traffic Controller, I want to instruct to land a plane at an airport, if the plane is not at the airport already so that I can avoid any miscommunication.

*/

//Set up test

testName = `User Story 4 - should return that plane is at the airport when trying to land a plane with the same ID as one already in the airport `

//Arrange
airport = new Airport();
airplane = new Airplane("1");
airplane2 = new Airplane("1");
expectedOutput = "The plane is already at the airport";


//Act
airport.landPlane(airplane);
actualOutput = airport.landPlane(airplane2); //Output should be what happens when I try to add another plane with the same ID. 

//Assert
result = assertEquals(actualOutput, expectedOutput);

//Report
console.log(testName);
console.log(`=========`);
console.log(`Test passes: ${result}`);

//Clean up
testName = ``;
actualOutput, expectedOutput, result = undefined;





/* User Story 5

As an Air Traffic Controller, I want to instruct to take off a plane as long as its at the airport, so that I can avoid any miscommunication.

*/

//Set up test

testName = `User Story 5 - should return that the plane is able to take off
 as long as that plane with that ID is in the airplanes array`

 //Arrange
 airport = new Airport();
 airplane = new Airplane("1");
 expectedOutput = "The plane is at the airport and is clear for take off"


 //Act
 airport.addPlane(airplane);
 actualOutput = airport.isClearForTakeOff(airplane); //Output should be what happens when I check if the plane attached with the ID is in the array


 //Assert
 result = assertEquals(actualOutput, expectedOutput);

 //Report
 console.log(testName);
 console.log(`=========`);
 console.log(`Test passes: ${result}`);

//Clean up
testName = ``;
actualOutput, expectedOutput, result = undefined;

/* User Story 6

As an Air Traffic Controller, I want to ensure that a plane can't land if the weather is stormy so that I can avoid any accidents.
*/

testName = `User Story 6 - should return that the plane can't land if the weather is stormy`
//Used Copilot to generate this test

//Arrange
airport = new Airport();
airplane = new Airplane("1");
expectedOutput = "The weather is too stormy to land";

//Act
actualOutput = airport.isStormyToLand(airplane);

//Assert
result = assertEquals(actualOutput, expectedOutput);

//Report
console.log(testName);
console.log(`=========`);
console.log(`Test passes: ${result}`);

//Clean up
testName = ``;
actualOutput, expectedOutput, result = undefined;

testName = `User Story 7 - should return that the plane can't take off if the weather is stormy`;
//Used Copilot to generate this test

//Arrange
airport = new Airport();
airplane = new Airplane("1");
expectedOutput = "The weather is too stormy to take off";

//Act
actualOutput = airport.isStormyToTakeOff(airplane);

//Assert
result = assertEquals(actualOutput, expectedOutput);

//Report
console.log(testName);
console.log(`=========`);
console.log(`Test passes: ${result}`);

