(function () {
    "use strict";

    var o1 = new Object(); // or {}
    o1["firstname"] = "x";
    o1["lastname"] = "x";
    o1["fullname"] = function(){ 
        return this["firstname"] + " " + this["lastname"]; 
    };    
    console.log(o1);
    console.log(o1.fullname());
    
    var o2 = new Object(); // or {}
    o2.firstname = "y";
    o2.lastname = "y";
    o2.fullname = function(){ 
        return this.firstname + " " + this.lastname; 
    };    
    console.log(o2);
    console.log(o2.fullname());
    
    var o3 = {
        firstname: "z",
        lastname: "z",
        fullname: function(){ 
        return this.firstname + " " + this.lastname; }    
    };
    console.log(o3);
    console.log(o3.fullname());

    var a = [o1, o2, o3];
    console.log(a);
    
    var json = JSON.stringify(a);
    console.log(json);
    







})();