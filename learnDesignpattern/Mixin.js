var Person = function( firstName, lastName ){
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = "male";
};

var clark = new Person( "Clark", "Kent" );
 
var Superhero = function( firstName, lastName, powers ){
    Person.call( this, firstName, lastName );
 
    this.powers = powers;
};
 
Superhero.prototype = Object.create( Person.prototype );
var superman = new Superhero( "Clark", "Kent", ["flight","heat-vision"] );
console.log( superman );




var Car = function ( settings ) {
    this.model = settings.model || "no model provided";
    this.color = settings.color || "no colour provided";
};

var Mixin = function () {};
 
Mixin.prototype = {
    driveForward: function () {
        console.log( this.model + " drive forward" );
    },
    driveBackward: function () {
        console.log( this.model + " drive backward" );
    },
    driveSideways: function () {
        console.log( this.model + " drive sideways" );
    }
};
 
function augment( receivingClass, givingClass ) {
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    else {
        for ( var methodName in givingClass.prototype ) {
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }

        }
    }
};
 
augment( Car, Mixin, "driveForward", "driveBackward" );
 
var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});
 
myCar.driveForward();
myCar.driveBackward();
 
augment( Car, Mixin );
 
var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});

mySportsCar.driveForward();
mySportsCar.driveBackward();
mySportsCar.driveSideways();



//Mixins giúp giảm sự lặp lại chức năng và tăng tái sử dụng chức năng trong một hệ thống