const stringLength = (str) => {
    const str2 = str.length;
    if (str2 >= 1 && str2 <= 10) return str.length;
     throw new Error ("The string is between 1 and 10");
  };

module.exports = stringLength;