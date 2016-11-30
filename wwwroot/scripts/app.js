(function () {
    "use strict";

    
 

    a();
  




    function a(){
        b();
    }
    
    function b(){
        c();
    }
   
    function c(){
        throw new Error("lskdjf");
    }



})();
