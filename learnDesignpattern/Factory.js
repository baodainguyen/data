function Car( options ) {
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

// A constructor for defining new trucks
function Truck( options){
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}
var actions = {
    drive: function(){console.log('driving');},
    breakDown: function(){console.log('breakDown');}
}
Car.prototype = actions;
Truck.prototype = actions;


var Factory = function () {
  var types = {};       // Storage for our vehicle types
 
  return {
      getVehicle: function ( textType, options ) {
          var Vehicle = types[textType];
 
          return (Vehicle ? new Vehicle(options) : null);
      },
 
      registerVehicle: function ( textType, Vehicle ) {
          var proto = Vehicle.prototype;

          // only register classes that fulfill the vehicle contract
          if ( proto.drive && proto.breakDown ) {
              types[textType] = Vehicle;
          }

          return Factory;
      }
  };
}();
 
// Usage:
Factory.registerVehicle( "car", Car );
Factory.registerVehicle( "truck", Truck );
 
// Instantiate a new car based on the abstract vehicle type
var car = Factory.getVehicle(
            "car", 
            {
                color: "lime green",
                state: "like new" 
            } 
);
 console.log(car, car.drive());

// Instantiate a new truck in a similar manner
var truck = Factory.getVehicle( 
            "truck", 
            {
                state: "origin",
                wheelSize: "medium",
                color: "neon yellow 2" 
            } 
);
 console.log(truck, truck.breakDown());