function inventory(currentInv, delivery) {
  var inventoryList = [];

  inventoryList = currentInv.map(function(item) {
    return item[1];
  });

  for(var i = 0; i < delivery.length; i++) {
    if ( inventoryList.includes(delivery[i][1]) ) {
      for(var j = 0; j < currentInv.length; j++) {
        if (delivery[i][1] === currentInv[j][1]) {
          currentInv[j][0] += delivery[i][0];
        }
      }
    } else {
      currentInv.push(delivery[i]);
      currentInv = currentInv.sort( function(a, b) {
        if (a[1] > b[1]) { return 1; }
        else if (a[1] < b[1]) { return -1; }
        else { return 0; }
      });
    }
  }
  return currentInv;
}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

inventory(curInv, newInv);
j