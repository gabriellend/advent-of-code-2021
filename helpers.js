module.exports = {
  // convertDataToString: (data) => {
  //   return data.toString().replace(/\s/g, ",");
  // },

  convertDataToNumericArray: (data) => {
    return data
      .toString()
      .replace(/\n/g, " ")
      .split(" ")
      .map((val) => Number(val));
  },

  convertDataToArrayOfStrings: (data) => {
    return data.toString().replace(/\s/g, ",").split(",");
  },

  convertOddIndicesToNumbers: (course) => {
    return course.map((val, i) => {
      if (i % 2 === 1) {
        return Number(val);
      } else {
        return val;
      }
    });
  },
};
