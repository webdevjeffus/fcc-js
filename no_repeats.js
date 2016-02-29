// Solution in progress; not complete

function getPerms(str){
  var permutations = [],
    nextPerm = [],
    chars = str.split('');

  function permutate(chars){
    if( chars.length === 0 ) {
      permutations.push(nextPerm.join(''));
    }
    for( var i = 0; i < chars.length; i++ ){
      chars.push(chars.shift());
      nextPerm.push(chars[0]);
      permutate(chars.slice(1));
      nextPerm.pop();
    }
  }

  permutate(chars);
  console.log(permutations);
  return permutations;
}

function checkForRepeats(word) {
  for( var i = 0; i < word.length - 1; i++) {
    if ( word[i] === word[i+1]) {
      return true;
    }
    return false;
  }
}


function permAlone(str) {
  var allPerms = getPerms(str);
  console.log(allPerms);
  var noRepeatsPerms = [];

  debugger;
  for( var i = 0; i < allPerms.length; i++ ) {
    if ( checkForRepeats(allPerms[i]) == false ) {
      noRepeatsPerms.push(allPerms[i]);
    }
  }
  console.log(noRepeatsPerms);
  return noRepeatsPerms.length;
}

permAlone('aab');