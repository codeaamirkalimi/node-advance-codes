var {EventEmitter} = require('events');
console.log(EventEmitter);
var eventEmitter = new EventEmitter();
console.log(eventEmitter.  listenerCount());
//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}

// listener #1
var listner1 = function listner1() {
    console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
    console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);
console.log(eventEmitter.  listenerCount());
//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
console.log(eventEmitter.  listenerCount());
//Fire the 'scream' event:
eventEmitter.emit('scream');
console.log(eventEmitter.  listenerCount());
