(function () {
    "use strict";

    $("#myButton").click(function () {
        var a = $("#myText").val();
        if (a === "")
            a = 10;
        $.getJSON("http://fdemo2.azurewebsites.net/random.ashx", { antal: a }, function (data) {
            var lst = $("#myList").empty();
            for (var i = 0; i < data.length; i++) {
                lst.append($("<li />").html(data[i].guid));                
            }
        });
    });
})();
