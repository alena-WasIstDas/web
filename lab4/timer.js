function counter(n) {
    let current = n;
    const intervalID = setInterval(() => {
        console.log(current);
        if (current === 0) {
            clearInterval(intervalID);
        }
        current--;
    }, 1000);
}
function createCounter(n) {
    let current = n;
    let intervalID;

    return {
        start: function() {
            intervalID = setInterval(() => {
                console.log(current);
                if (current === 0) {
                    clearInterval(intervalID);
                }
                current--;
            }, 1000);
        },
        pause: function() {
            clearInterval(intervalID);
        },
        stop: function() {
            clearInterval(intervalID);
            current = n;
        }
    };
}

counter(8); 
const myCounter = createCounter(8); 
myCounter.start();
myCounter.pause();
myCounter.stop();