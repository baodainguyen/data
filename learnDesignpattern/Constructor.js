function Car( model, year, miles ) {
  this.model = model;
  this.year = year;
  this.miles = miles;
 
}
var methods = {
	toString: function(){
		return this.model + " has done " + this.miles + " miles";
	},
    from: function(){
        return ". In " + this.year;
    }
}
Car.prototype = methods;
 
// Usage:
 
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log( civic.toString(), civic.from() );
console.log( mondeo.toString(), mondeo.from() );