const events = require('events');

// EVENT EMITTER
const eventEmitter =new events.EventEmitter();

//bind event
eventEmitter.on('eventName', ()=> {
    console.log('eventemitter fire');
})

eventEmitter.emit('eventName');

const connectHandler =  () => {
    console.log('connection succesful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
});

// Fire the connection event
eventEmitter.emit('connection');
