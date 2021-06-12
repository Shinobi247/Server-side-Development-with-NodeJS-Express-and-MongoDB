const events = require("events");

const util = require("util");

var Student = function (name) {
  this.name = name;
};

util.inherits(Student, events.EventEmitter);

var max = new Student("max");

max.on("scored", function (marks) {
  console.log(max.name + " scores " + marks + " marks");
});

max.emit("scored", 99);
