function totalDrawer(cidArr) {
  return cidArr.reduce(function(total, current) {
    return total + current[1];
  }, 0);
}

function convertCidToNums( cid ) {
  return cid.map( function( elem ) {
    switch ( elem[0] ) {
      case "PENNY":
        elem[0] = 0.01;
        break;
      case "NICKEL":
        elem[0] = 0.05;
        break;
      case "DIME":
        elem[0] = 0.10;
        break;
      case "QUARTER":
        elem[0] = 0.25;
        break;
      case "ONE":
        elem[0] = 1;
        break;
      case "FIVE":
        elem [0]= 5;
        break;
      case "TEN":
        elem[0] = 10;
        break;
      case "TWENTY":
        elem[0] = 20;
        break;
      case "ONE HUNDRED":
        elem[0] = 100;
        break;
    }
  });
}

function convertCidToNames( cid ) {
  return cid.map( function( elem ) {
    switch ( elem[0] ) {
      case 0.01:
        elem[0] = "PENNY";
        break;
      case 0.05:
        elem[0] = "NICKEL";
        break;
      case 0.10:
        elem[0] = "DIME";
        break;
      case 0.25:
        elem[0] = "QUARTER";
        break;
      case 1:
        elem[0] = "ONE";
        break;
      case 5:
        elem [0]= "FIVE";
        break;
      case 10:
        elem[0] = "TEN";
        break;
      case 20:
        elem[0] = "TWENTY";
        break;
      case 100:
        elem[0] = "ONE HUNDRED";
        break;
    }
  });
}

function round( number ) {
  return Math.round(number * 100)/100;
}

function drawer(price, cash, cid) {
  var changeAvailable = totalDrawer(cid),
      changeDue = cash - price,
      changeArray = [],
      index = cid.length - 1,
      changeDenom = [];

  if (changeAvailable < changeDue) {
    return "Insufficient Funds";
  } else if (changeAvailable === changeDue) {
    return "Closed";
  } else {
    convertCidToNums(cid);
    while (changeDue > 0 && index >= 0) {
      changeDenom = [0, 0];
      while (changeDue >= cid[index][0] && cid[index][1] > 0) {
        changeDenom[0] = cid[index][0];
        changeDenom[1] += cid[index][0];
        changeDue -= cid[index][0];
        changeDue = round( changeDue );
        cid[index][1] -= cid[index][0];
      }
      if (changeDenom[1] > 0) {
        changeArray.push(changeDenom);
      }
      index--;
    }
    if (changeDue > totalDrawer(changeArray)) {
      return "Insufficient Funds";
    } else {
      convertCidToNames(changeArray);
      return changeArray;
    }
  }
}

testDrawer = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
];

drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);