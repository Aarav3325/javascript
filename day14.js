var cancellable = function(fn, args, t) {
    let cancelled = false;
    const cancelFn = () => {
        cancelled = true;
    };
    setTimeout(() => {
        if (!cancelled) {
            fn(...args);
        }
    }, t);
    return cancelFn;
};
