const fs = require("fs");
const helpers = require("../helpers");

//SOLUTION 1
const calculateFinalPosition = () => {
  fs.readFile("./course.txt", (err, data) => {
    let course = helpers.convertDataToArrayOfStrings(data);
    course = convertOddIndicesToNumbers(course);

    let horizontalPosition = 0;
    let depth = 0;
    for (var i = 0; i < course.length; i += 2) {
      if (course[i] === "forward") {
        horizontalPosition += course[i + 1];
      } else if (course[i] === "down") {
        depth += course[i + 1];
      } else if (course[i] === "up") {
        depth -= course[i + 1];
      }
    }

    return horizontalPosition * depth;
  });
};

calculateFinalPosition();

//SOLUTION 2
const calculateFinalPositionWithAim = () => {
  fs.readFile("./course.txt", (err, data) => {
    let course = helpers.convertDataToArrayOfStrings(data);
    course = convertOddIndicesToNumbers(course);

    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;
    for (var i = 0; i < course.length; i += 2) {
      if (course[i] === "forward") {
        horizontalPosition += course[i + 1];
        if (aim !== 0) {
          depth += aim * course[i + 1];
        }
      } else if (course[i] === "down") {
        aim += course[i + 1];
      } else if (course[i] === "up") {
        aim -= course[i + 1];
      }
    }

    return horizontalPosition * depth;
  });
};

calculateFinalPositionWithAim();
