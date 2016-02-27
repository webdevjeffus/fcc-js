function telephoneCheck(str) {
  if ( (str.includes("(") && !str.includes(")")) ||
       (str.includes(")") && !str.includes("(")) ) {
    return false;
  } else {
    phoneNumberExp = new RegExp(/^[1]?\D{0,2}\d{3}\D{0,2}\d{3}\D?\d{4}$/);
    return phoneNumberExp.test(str);
  }
}

telephoneCheck("555-555-5555");
