(function() {
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

  a.sort(function(x, y) {
    if (x > y) return 1;
    if (x < y) return -1;
    return 0;
  });
  console.log(a);

  function filter1(v) {
    return v < 7;
  }
  let c = a.filter(filter1);
  console.log(c);

  let e = a.filter(function(v) {
    return v < 7;
  });
  console.log(e);

  let f = a.filter(v => v < 7);
  console.log(f);
})();
