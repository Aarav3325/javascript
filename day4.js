var createCounter = function(init) {
    var i = init;
    return {
        increment: function()
        {
            i = i + 1;
            return i;
        },
        reset: function()
        {
            i = init
            return i;
        },
        decrement: function()
        {
            i = i - 1;
            return i;
        }
    }
};
