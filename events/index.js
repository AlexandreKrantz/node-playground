const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const startCallback = (num) => {
    console.log('started' + num);
}
eventEmitter.on('start', startCallback);

eventEmitter.emit('start', 67);



// event can only happen once and then listener is removed.
eventEmitter.once('hello', () => {
    console.log('hello');
});

eventEmitter.emit('hello')
eventEmitter.emit('hello')

// remove a listener manually:
eventEmitter.removeListener('start', startCallback)
// you need to pass both the name of the event and the callback in order for it to work.
eventEmitter.emit('start');