(function () {
    "use strict";

    var a = [1, 5, 7, 15, 2, 6, 4];
    console.log(a);
    a.push(5);
    console.log(a);
    var b = a.pop();
    console.log("b=" + b);
    console.log(a);
    a.sort();
    console.log(a);

})();