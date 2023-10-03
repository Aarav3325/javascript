
var addTwoPromises = async function(promise1, promise2) {
    try {
        const [res1, res2] = await Promise.all([promise1, promise2]);
        const sum = res1 + res2;
        return Promise.resolve(sum);
    } catch (error) {
        return Promise.reject(error);
    }
};
