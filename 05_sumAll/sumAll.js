const sumAll = function (startN, endN) {
    //create variable to store total sum
      let sum = 0;
    //check if input parameter in number:
      if (typeof startN != "number" || typeof endN != "number") return "ERROR";
    //check if input numbers greater than 0:
      else if (startN < 0 || endN < 0) return "ERROR";
    //and last check is, if last number is greater than the first number then initial number will be the last number otherwise start number will be the initial:
      else if (startN < endN) {
        for (i = startN; i <= endN; i++) {
          sum += i;
        }
      } else {
        for (i = endN; i <= startN; i++) {
          sum += i;
        }
      }
    //then return sum:
      return sum;
    };

module.exports = sumAll
