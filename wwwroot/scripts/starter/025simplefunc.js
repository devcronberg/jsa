/* 
    You could to it like this - in global scope:

    function excludeVAT(amount) {}
    function includeVAT(amount) {}

    but then they (and the vat procentage) are global and harder to test and debug

    A simple solution could be to create an object with the functions as methods:

*/

var myVATCalculator = (function(vat){
    "use strict";
    
    var obj = {};   // empty object

    obj.excludeVAT = function (amount){
        // code missing
    };

    obj.includeVAT = function(amount){
        // code missing
    };
   
    var checkAmount = function(amount){
        // code missing    
    };

    return obj; // returns object with the two methods

})(0.25);   // VAT 

(function(){
    "use strict";
    
    console.log(myVATCalculator.includeVAT(100));
    console.log(myVATCalculator.excludeVAT(100));

})();