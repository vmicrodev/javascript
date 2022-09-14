console.log('StopWatch')

// Constructor
function Stopwatch() {

    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.');
        console.log('start')
        running = true;
        startTime = new Date();

    };

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch has already stopped.');
        console.log('stop')
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };


    this.reset = function() {
        console.log('reset')
        duration = 0;
        running = false;
        endTime = null;
        startTime = null;
        
    };

    // Read only propert
    Object.defineProperty(this, 'duration' , { 
        // Setter
        get: function() {
            return duration + ' Seconds'
        }
    });

};

const sw = new Stopwatch();