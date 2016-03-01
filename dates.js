var DATES = [
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"]
];

function friendly(arr) {

  function convertToOrd(numStr) {
    if (numStr[0] === "0") {
      numStr = numStr.slice(1);
    }

    if (numStr[-1] === "1") {
      numStr = numStr + "st";
    } else if (numStr[-1] === "2") {
      numStr = numStr + "nd";
    } else if (numStr[-1] === "3") {
      numStr = numStr + "rd";
    } else {
      numStr = numStr + "th";
    }
    return numStr;
  }

  function convertDate(date) {
    var convertedDate = date.split('-');
    convertedDate.push(convertedDate.shift());
    for( var i = 0; i < DATES.length; i++ ) {
      if (convertedDate[0] == DATES[i][0]) {
        convertedDate[0] = DATES[i][1];
      }
    }

    convertedDate[1] = convertToOrd(convertedDate[1]);
    return convertedDate;
  }

  function prepEndDate(startDate, endDate) {
    console.log("Prep End: " + startDate + ", " + endDate);
    if (startDate[2] === endDate[2]) {
      endDate.pop();
      if (startDate[0] === endDate[0]) {
        endDate.shift();
        if (startDate[1] === endDate[1]) {
          endDate = [];
        }
      }
    }
    console.log("Prepped End: " + endDate);
    return endDate;
  }

  function dateToStr(date) {
    var strDate = "";
    switch (date.length) {
      case 3:
        strDate = date[0] + " " + date[1] + ", " + date[2];
        break;
      case 2:
        strDate = date[0] + " " + date[1];
        break;
      case 1:
        strDate = date[0];
        break;
    }
    return strDate;
  }

  var startDate = convertDate(arr[0]),
      endDate = convertDate(arr[1]);

  endDate = prepEndDate(startDate, endDate);

  console.log( dateToStr(startDate), dateToStr(endDate) );

  return arr;
}

friendly(['2016-07-01', '2016-07-04']);