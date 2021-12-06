const fs = require("fs");
const helpers = require("../helpers");

//SOLUTION 1
const calculatePowerConsumption = () => {
  fs.readFile("./report.txt", (err, data) => {
    const report = helpers.convertDataToArrayOfStrings(data);
    let zeroes = 0;
    let ones = 0;
    let gammaRate = "";
    let epsilonRate = "";

    for (var i = 0; i < report[0].length; i++) {
      for (var j = 0; j < report.length; j++) {
        if (report[j][i] === "1") {
          ones++;
        } else {
          zeroes++;
        }
      }

      if (zeroes > ones) {
        gammaRate += "0";
        epsilonRate += "1";
      } else {
        gammaRate += "1";
        epsilonRate += "0";
      }

      zeroes = 0;
      ones = 0;
    }

    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
  });
};

calculatePowerConsumption();

//SOLUTION 2

//HELPERS
const getGeneratorRating = (zeroes, ones, generatorRating) => {
  for (var i = 0; i < generatorRating[0].length; i++) {
    for (var j = 0; j < generatorRating.length; j++) {
      if (generatorRating[j][i] === "1") {
        ones++;
      } else {
        zeroes++;
      }
    }

    if (ones > zeroes || ones === zeroes) {
      generatorRating = generatorRating.filter((num, index) => num[i] === "1");
    } else {
      generatorRating = generatorRating.filter((num, index) => num[i] === "0");
    }

    if (generatorRating.length === 1) {
      return generatorRating[0];
    }

    zeroes = 0;
    ones = 0;
  }
};

const getScrubberRating = (zeroes, ones, scrubberRating) => {
  for (var i = 0; i < scrubberRating[0].length; i++) {
    for (var j = 0; j < scrubberRating.length; j++) {
      if (scrubberRating[j][i] === "1") {
        ones++;
      } else {
        zeroes++;
      }
    }

    if (zeroes < ones || zeroes === ones) {
      scrubberRating = scrubberRating.filter((num, index) => num[i] === "0");
    } else {
      scrubberRating = scrubberRating.filter((num, index) => num[i] === "1");
    }

    if (scrubberRating.length === 1) {
      return scrubberRating[0];
    }

    zeroes = 0;
    ones = 0;
  }
};

const calculateLifeSupportRating = () => {
  fs.readFile("./report.txt", (err, data) => {
    const report = helpers.convertDataToArrayOfStrings(data);
    let zeroes = 0;
    let ones = 0;
    let generatorRating = report.slice();
    let scrubberRating = report.slice();

    generatorRating = getGeneratorRating(zeroes, ones, generatorRating);
    scrubberRating = getScrubberRating(zeroes, ones, scrubberRating);

    return parseInt(generatorRating, 2) * parseInt(scrubberRating, 2);
  });
};

calculateLifeSupportRating();
