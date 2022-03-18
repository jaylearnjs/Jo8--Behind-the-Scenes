"use strict";

function calcAge(birtYear) {
  const age = 2037 - birtYear;

  function printAge() {
    let output = `${firstName},You are ${age}, born in ${birtYear}`;
    console.log(output);

    if (birtYear >= 1981 && birtYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reasssigning outer scope's variable
      output = "New Output";

      const str = `oh, you are millenium,${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Jonas";
calcAge(1991);
