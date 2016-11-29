(function () {
    "use strict";

    for (var i = 1; i < 11; i++) {
        var txt = "";
        for (var x = 1; x < 11; x++) {            
            txt += S(x*i).padLeft(4).s;
        }        
        console.log(txt);
    }

})();