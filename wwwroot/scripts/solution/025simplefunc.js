var myVATCalculator = (function(vat){
    "use strict";
    
    var obj = {};   // empty object

    obj.excludeVAT = function (amount){
        checkAmount(amount);
        return amount / (1+vat);
    };

    obj.includeVAT = function(amount){
        checkAmount(amount);
        return (1+vat) * amount;
    };
   
    var checkAmount = function(amount){
        if(typeof(amount)!=="number")
            throw new Error("Bad amount");
    };

    return obj;

})(0.25);

(function(){
    "use strict";
    
    console.log(myVATCalculator.includeVAT(100));
    console.log(myVATCalculator.excludeVAT(100));

})();