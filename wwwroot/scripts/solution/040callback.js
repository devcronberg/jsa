(function () {
    "use strict";

    function getRandomNumber(max, allDone) {
        setTimeout(function () {
            allDone(Math.floor((Math.random() * max)) + 1);
        }, max * 100);
    }

    getRandomNumber(10, function (res) {
        console.log(res);
    });


})();