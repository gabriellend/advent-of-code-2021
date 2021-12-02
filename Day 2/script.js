const fs = require("fs");

//HELPERS
const convertDataToArray = (data) =>
  data.toString().replace(/\s/g, ",").split(",");

const convertToNumbers = (course) =>
  course.map((val, i) => {
    if (i % 2 === 1) {
      return Number(val);
    } else {
      return val;
    }
  });

//SOLUTION 1
const calculateFinalPosition = () => {
  fs.readFile("./course.txt", (err, data) => {
    let course = convertDataToArray(data);
    course = convertToNumbers(course);

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
