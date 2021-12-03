const fs = require("fs");
const helpers = require("../helpers");

//SOLUTION 1
const calculatePowerConsumption = () => {
  fs.readFile("./report.txt", (err, data) => {
    const report = helpers.convertDataToArrayOfStrings(data);
    let zeroCount = 0;
    let oneCount = 0;
    let gammaRate = "";
    let epsilonRate = "";

    for (var i = 0; i < report[0].length; i++) {
      for (var j = 0; j < report.length; j++) {
        if (report[j][i] === "1") {
          oneCount++;
        } else {
          zeroCount++;
        }
      }

      if (zeroCount > oneCount) {
        gammaRate += "0";
        epsilonRate += "1";
      } else {
        gammaRate += "1";
        epsilonRate += "0";
      }
      zeroCount = 0;
      oneCount = 0;
    }

    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
  });
};

calculatePowerConsumption();
