
//Creat an event emitter object
const events = require('events')
const eventEmitter = new events.EventEmitter()

// Create an event handler and score some brownie points for compliments
const myEventHandler = function () {
    console.log('Peter is Amazing!')
}

//Register the event handler
eventEmitter.on('event', myEventHandler)

//Fire the 'event' event
eventEmitter.emit('event')

//Unregister the event handler
eventEmitter.removeListener('event', myEventHandler)

//Fire the 'event' event again
eventEmitter.emit('event')

// write it to console
console.log(eventEmitter)

