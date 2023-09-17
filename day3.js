var expect = function(val) {
    return{
        toBe : function (v) {
        if(v !== val)
        {
            throw new Error("Not Equal");
        }
        return true;
        },
        notToBe : function (v) {
            if(v === val)
            {
                throw new Error("Equal");
            }
            return true;
        }
    }
};
