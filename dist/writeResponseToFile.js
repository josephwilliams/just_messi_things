"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = writeApiResponseToTextFile;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function writeApiResponseToTextFile(apiResponse) {
  _fs2.default.writeFile("./exampleApiResponseBody.json", (0, _stringify2.default)(apiResponse), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}