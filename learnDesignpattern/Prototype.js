// Object literal
var myCar = {
  name: "Ford Escort",
  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },
  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }
};
 
var yourCar = Object.create( myCar );   // Use Object.create to instantiate a new car
console.log( yourCar.name );            // Now we can see that one is a prototype of the other


var vehicle = {
  getModel: function () {
    console.log( "The model of this car is " + this.model );
  }
};
var MY_GLOBAL = {nextId: function(){return this.id++;}}
var car = Object.create(vehicle, {
  "id": {
    value: MY_GLOBAL.nextId(),
    // writable:false, configurable:false by default
    enumerable: true
  },
  "model": {
    value: "Ford xx",
    enumerable: true
  }
});
console.log(car, car.getModel());



var vehiclePrototype = {
  init: function ( carModel ) {
    this.model = carModel;
  },
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model);
  }
};

function vehicleF( model ) {
  function F() {};
  F.prototype = vehiclePrototype;
 
  var f = new F();
 
  f.init( model );
    
  return f;
};
 
var car = vehicleF( "Ford Escort" );
car.getModel();