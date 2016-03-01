var MONTHS = [
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

  function convertDate(date) {
    var convertedDate = date.split('-');
    for ( var i = 0; i < convertedDate.length; i++) {
      convertedDate[i] = parseInt(convertedDate[i]);
    }
    return convertedDate;
  }

  function prepDates(dates) {
    var startDate = dates[0],
        endDate = dates[1],
        workingStartDate = startDate,
        workingEndDate = endDate,
        currentYear = new Date().getFullYear();

    if ( JSON.stringify(startDate) === JSON.stringify(endDate) ) {
      workingEndDate = [];
    }
    // start and end in same month, same year
    else if (startDate[0] === endDate[0] && startDate[1] === endDate[1]) {
      workingEndDate = [ endDate[2] ];
    }
    // start & end within 1 year
    else if (startDate[0] === endDate[0] ||
        (startDate[0] === endDate[0]-1 && startDate[1] > endDate[1]) ||
        (startDate[0] === endDate[0]-1 && startDate[1] === endDate[1]) && startDate[2] > endDate[2] ) {
      // if start year is current year
      workingEndDate = [ endDate[1], endDate[2] ];
    }

    if ( startDate[0] === currentYear && workingEndDate.length < 3 ) {
      workingStartDate.shift();
    }
    return [workingStartDate, workingEndDate];
  }

  function monthNumToName(month) {
    for( var i = 0; i < MONTHS.length; i++ ) {
      if (month == MONTHS[i][0]) {
        month = MONTHS[i][1];
      }
    }
    return month;
  }

  function convertToOrd(num) {
    var numStr = num.toString();
    switch ( numStr.charAt(numStr.length-1) ) {
      case "1":
        numStr = numStr + "st";
        break;
      case "2":
        numStr = numStr + "nd";
        break;
      case "3":
        if (numStr === "13") {
          numStr = numStr + "th";
        } else {
          numStr = numStr + "rd";
        }
        break;
      default:
        numStr = numStr + "th";
      break;
    }
    return numStr;
  }


  function formatDates(dates) {
    for (var i = 0; i < dates.length; i++ ) {
      switch (dates[i].length) {
        case 3:
          dates[i][0] = dates[i][0].toString(); // year
          dates[i][1] = monthNumToName(dates[i][1]); // month
          dates[i][2] = convertToOrd(dates[i][2]); // date
          dates[i] =  dates[i][1] + " " + dates[i][2] + ", " + dates[i][0];
          break;
        case 2:
          dates[i][0] = monthNumToName(dates[i][0]); // month
          dates[i][1] = convertToOrd(dates[i][1]); // date
          dates[i] = dates[i][0] + " " + dates[i][1];
          break;
        case 1:
          dates[i][0] = convertToOrd(dates[i][0]); // date
          dates[i] = dates[i][0];
          break;
      }
    }

    if (dates[1].length === 0) {
      return [ dates[0] ];
    }
    return dates;
  }


  var dates = [ convertDate(arr[0]), convertDate(arr[1]) ];

  dates = prepDates(dates);
  dates = formatDates(dates);
  return dates;
}

friendly(['2016-07-01', '2016-07-04']);

