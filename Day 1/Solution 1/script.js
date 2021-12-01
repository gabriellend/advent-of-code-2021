const { count } = require("console");
const fs = require("fs");
//I - array of numbers
//O - one number (number of times deapth increases)
//C
//E

const countDepthIncrements = () => {
  fs.readFile("./measurements.txt", (err, data) => {
    const measurements = data
      .toString()
      .replace(/\n/g, " ")
      .split(" ")
      .map((val) => Number(val));

    let count = 0;
    for (var i = 1; i < measurements.length; i++) {
      if (measurements[i] > measurements[i - 1]) {
        count++;
      }
    }
    console.log(count);
    return count;
  });
};

countDepthIncrements();
