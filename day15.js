var cancellable = function(fn, args, t) {
    let intervalId;
    let cancelFlag = false;
    function cancelFn() {
        clearInterval(intervalId);
        cancelFlag = true;
     }
    function executeFn() {
        if (!cancelFlag) {
            fn(...args);
        }
    }
    executeFn();
    intervalId = setInterval(executeFn, t);
    return cancelFn;
};