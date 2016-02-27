// Used to verify char codes; not called in solution
function listChars() {
  for( var i = 65; i <= 90; i++ ) {
    console.log( String.fromCharCode(i) );
  }
}

function listCharCodes(str) {
  for( var i = 0; i < str.length; i++ ) {
    console.log( str.charCodeAt(i) );
  }
}

// Solution
function rot13(str) { // LBH QVQ VG!
  var result = "",
      lastIndexFirstHalf = "M".charCodeAt(0),
      currentCharCode;

  for( var i = 0; i < str.length; i++) {
    currentCharCode = str.charCodeAt(i);
    if (currentCharCode >= 65 && currentCharCode <= 90) {
      if ( currentCharCode <= lastIndexFirstHalf ) {
        result += String.fromCharCode( currentCharCode + 13 );
      } else {
        result += String.fromCharCode( currentCharCode - 13 );
      }
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}
