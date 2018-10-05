document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    myFunction = (message, num) => {
        console.log(message);
        return num = 4;
    }

    let storedVal = myFunction();

    multiplyFunction = () => {
        console.log(storedVal * 4)
    }

    setTimeout(function () {
        multiplyFunction()
    }, 2000);

    getWords = () => {
        console.log('Harry')
        setTimeout(() => {
            console.log('Potter');
        }, 3000);
        setTimeout(() => {
            console.log('Fucking')
        }, 2000)
        setTimeout(() => {
            console.log('Mother')
        }, 1000)
    }

    console.log(getWords());

    done = () => {
        console.log('done')
    }

    countdown = (num, callback) => {
        console.log(num);
        setTimeout(() => {
            console.log(num - 1);
        }, 500)
        setTimeout(() => {
            console.log(num - 2);
            console.log(callback);
        }, 1000);
    }

    countdown(3, done);

    const globalVar = true;

    let orderingChickenSandwich = new Promise((resolve, reject) => {
        if (globalVar === true) {
            let obj = {
                sandwich: "chicken",
                veggies: "lettuce"
            }
            resolve(obj);
        } else {
            let err = new Error('there was an error :(');
            reject(err);
        }
    })

    orderFood = () => {
        orderingChickenSandwich.then(function (d) {
            console.log(d);
        }, function (e) {
            console.log(e);
        })
    }

    orderFood();

    let p = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(1);
        }, 2000);
    });

    p.then(function(val) {
        return (val * 2)
    }).then(function(val) {
        return (val * 4)
    }).then(function(val) {
        return (val * 6)
    });
});