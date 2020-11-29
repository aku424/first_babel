"use strict";

var _second = _interopRequireDefault(require("./second"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_second["default"]);

var test = function test(num) {
  var pai = 3.1415;
  var numA = num;
  var calCircleArea = numA * numA * pai;
  return calCircleArea;
};

console.log(test(30));