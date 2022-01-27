const calulator = {
  all: function (a, b) {
    this.plus(a, b);
    this.minus(a, b);
    this.multiply(a, b);
    this.divide(a, b);
    this.powerof(a, b);
  },
  plus: function (a, b) {
    console.log("The answer is ", a + b);
  },
  minus: function (a, b) {
    console.log("The answer is ", a - b);
  },
  multiply: function (a, b) {
    console.log("The answer is ", a * b);
  },
  divide: function (a, b) {
    console.log("The answer is ", a / b);
  },
  powerof: function (a, b) {
    console.log("The answer is ", a ** b);
  },
};
calulator.plus(4, 5);
calulator.all(2, 3);
