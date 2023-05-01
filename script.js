function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
    let romanNumeral = "";

    for (let key in obj) {
	  if (num >= obj[key][1] && obj[key][0].length === 2) {
	    romanNumeral += obj[key][0];
	    num -= obj[key][1];
	}

	while (num >= obj[key][1]) {
	  romanNumeral += obj[key][0];
	  num -= obj[key][1];
	}
  }

  return romanNumeral;
  }

  return romanNumeral;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
