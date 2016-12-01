(function () {
    "use strict";

    var excludeVAT = function (amount, vat) {
        checkAmount(amount);
        return amount / (1 + vat);
    };

    var includeVAT = function (amount, vat) {
        checkAmount(amount);
        return (1 + vat) * amount;
    };

    var checkAmount = function (amount) {
        if (typeof (amount) !== "number")
            throw new Error("Bad amount");
    };

    console.log(includeVAT(100, .25));
    console.log(excludeVAT(100, .25));

})();