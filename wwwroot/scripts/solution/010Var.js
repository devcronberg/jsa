(function () {
    "use strict";

    var t = 1;
    console.log(typeof (t));

    t = "temp";
    console.log(typeof (t));

    t = true;
    console.log(typeof (t));

    t = {};
    console.log(typeof (t));


    // should generate an error (use strict)
    g = 1;

})();