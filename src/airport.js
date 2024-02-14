class Airport {

    airplanes = [];

    weather = "stormy";

    constructor() {
        this.maxCapacity = 1;
    }

    addPlane = (airplane) => {
        //If number of airplanes in array is more than max capacity, reject and return statement
        if (this.airplanes.length >= this.maxCapacity) {
            return "Maximum capacity reached, unable to hold another airplane";
        }
        //Otherwise add airplane to array.
        this.airplanes.push(airplane);
        return "New plane added, max capacity override"; //Statement to test that max capacity has been override.

    }

    landPlane = (airplane) => {
     
           const findAirplane = this.airplanes.find((airplane) => airplane.id === "1"); //Finds instance where another plane has an ID of 1 

        if (findAirplane) {
            return "The plane is already at the airport";  // if one does it can't land. 
        }
        // this.airplanes.push(airplane); //if one doesn't, it can land.
        this.airplanes.push(airplane); //if its not stormy, the plane can land.

    }

    isClearForTakeOff = () => {
        
        const findAirplane = this.airplanes.find((airplane) => airplane.id === "1"); //Finds the plane with the right id in the array

        if (findAirplane) {
            return "The plane is at the airport and is clear for take off"; //If its in the array, the plane is clear for take off
        }
        
        return "The plane is not at the airport"; 

        
    }

    isStormyToLand = () => {
        if (this.weather === "stormy") {
            return "The weather is too stormy to land"; //If the weather is stormy, the plane can't land
        }

        "The weather is not stormy, the plane can land";
    }

    isStormyToTakeOff = () => {
        if (this.weather === "stormy") {
            return "The weather is too stormy to take off"; //If the weather is stormy, the plane can't take off
        }

        "The weather is not stormy, the plane can take off";
    }


}

export default Airport;