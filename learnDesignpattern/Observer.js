function Observers() {
    this.list = [];
}
var methodGet = {
    count: function(){
        return this.list.length;
    },
    get: function (index) {
        if(index > -1 && index < this.list.length) 
            return this.list[index];
    },
    indexOf: function(obj, startIndex) {
        var i = startIndex || 0, len = this.list.length;
        while(i < len) {
            if(this.list[i] === obj) return i;
            i++;
        }
        return -1;
    }
}
Observers.prototype = methodGet;
Observers.prototype.add = function (obj) {
  return this.list.push(obj);  
};
Observers.prototype.removeAt = function(index) {
  this.list.splice(index, 1);  
};

function Subject(){
    this.observers = new Observers();
}
Subject.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};
Subject.prototype.removeObserver = function(observer){
    this.observers.removeAt(this.observers.indexOf(observer));
};
Subject.prototype.notify = function(context) {
    var observerCount = this.observers.count();
    for(var i = 0; i < observerCount; i++)
        this.observers.get(i).update(context);
};

function Observer() {
    this.update = function(){
        //TODO
    };
};

function extend(obj, extension){
  for(var key in extension)
      obj[key] = extension[key];
};
      

var controlCheckbox = document.getElementById('mainCheckbox'),
      addBtn = document.getElementById('addNewObserver'),
      container = document.getElementById('observersContainer');
    extend(controlCheckbox, new Subject());
    controlCheckbox.onclick = function(){
        controlCheckbox.notify(controlCheckbox.checked);
    };
    addBtn.onclick = function addNewObserver(){
      var check = document.createElement("input");
      check.type = 'checkbox';
      extend(check, new Observer());
      check.update = function(value){
        this.checked = value;
      };
      controlCheckbox.addObserver(check);
      container.appendChild(check);
    };