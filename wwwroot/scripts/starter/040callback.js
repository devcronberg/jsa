(function () {
    "use strict";

    function getRandomNumber(max) {
        setTimeout(function () {
            return Math.floor((Math.random() * max)) + 1;
        }, max * 100);
    }
    
    var res = getRandomNumber(10);
    console.log(res);

})();