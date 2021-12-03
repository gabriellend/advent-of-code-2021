const fs = require("fs");
const helpers = require("../helpers");

//SOLUTION 1
const calculatePowerConsumption = () => {
  fs.readFile("./report.txt", (err, data) => {
    const report = helpers.convertDataToNumericArray(data);
  });
};

calculatePowerConsumption();
