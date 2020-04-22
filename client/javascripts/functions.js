// jshint esversion: 6
//Req 3a
let revWords1 = str => {
  let strArry = str.split(""),
    revStr = "",
    revArry = [],
    finalRev = "";

  //using for loop
  for (var i = strArry.length - 1; i >= 0; i--) {
    revStr = revStr + str.charAt(i);
  }

  revArry = revStr.split(" ");
  revArry.reverse();
  finalRev = revArry.join(" ");

  return finalRev;
};

//Req 3b
let revWords2 = str => {
  let strArry = str.split(""),
    revStr = "",
    revArry = [],
    finalRev = "";

  strArry.reverse();

  //using foreach
  strArry.forEach((item, i) => {
    for (i = item.length - 1; i >= 0; i--) {
      revStr = revStr + item.charAt(i);
    }
  });

  revArry = revStr.split(" ");
  revArry.reverse();
  finalRev = revArry.join(" ");

  return finalRev;
};

//Req 3c
let revWords3 = str => {
  let strArry = str.split(""),
    revStr = "",
    revArry = [],
    finalRev = "";

  strArry.reverse();

  //using for of loop
  for (var i of strArry) {
    revStr = revStr + i;
  }

  revArry = revStr.split(" ");
  revArry.reverse();
  finalRev = revArry.join(" ");

  return finalRev;
};

//Req 5 XC
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
