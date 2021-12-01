const fs = require("fs");

//HELPER
const convertDataToNumericArray = (data) => {
  return data
    .toString()
    .replace(/\n/g, " ")
    .split(" ")
    .map((val) => Number(val));
};

//SOLUTION 1
const countDepthIncrements = () => {
  fs.readFile("./measurements.txt", (err, data) => {
    const measurements = convertDataToNumericArray(data);

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

//SOLUTION 2;
const countDepthIncrementsInTrios = () => {
  fs.readFile("./measurements.txt", (err, data) => {
    const measurements = convertDataToNumericArray(data);

    let count = 0;
    for (var i = 0; i < measurements.length; i++) {
      let currentTrio =
        measurements[i] + measurements[i + 1] + measurements[i + 2];
      let nextTrio =
        measurements[i + 1] + measurements[i + 2] + measurements[i + 3];
      if (nextTrio > currentTrio) {
        count++;
      }
    }
    console.log(count);
    return count;
  });
};

countDepthIncrementsInTrios();
