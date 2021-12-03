module.exports = {
  convertDataToNumericArray: (data) => {
    return data
      .toString()
      .replace(/\n/g, " ")
      .split(" ")
      .map((val) => Number(val));
  },

  convertDataToArray: (data) => {
    return data.toString().replace(/\s/g, ",").split(",");
  },

  convertToNumbers: (course) => {
    return course.map((val, i) => {
      if (i % 2 === 1) {
        return Number(val);
      } else {
        return val;
      }
    });
  },
};
