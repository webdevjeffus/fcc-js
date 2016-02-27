function sym() {

  function sym2Arrs(arr0, arr1) {
    var symDiff = [];
    for(var i = 0; i < arr0.length; i++) {
      if ( !arr1.includes(arr0[i]) ) {
        symDiff.push(arr0[i]);
      }
    }
    for(var i = 0; i < arr1.length; i++) {
      if ( !arr0.includes(arr1[i]) ) {
        symDiff.push(arr1[i]);
      }
    }
    return symDiff
  }

  var workingArr = arguments[0],
      resultArr = [];

  for(var i = 1; i < arguments.length; i++) {
    workingArr = sym2Arrs(workingArr, arguments[i]);
  }

  var resultArr = workingArr.filter(function(elem, pos) {
    return workingArr.indexOf(elem) == pos;
  });

  return resultArr.sort();
}

sym([1, 2, 3], [5, 2, 1, 4]);
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])

