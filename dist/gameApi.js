'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _writeResponseToFile = require('./writeResponseToFile');

var _writeResponseToFile2 = _interopRequireDefault(_writeResponseToFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBarcaGames(apiResponse) {
  console.log('>> keys', (0, _keys2.default)(apiResponse));
  var barcaFixtures = (0, _get2.default)(apiResponse, 'fixtures', []);
  console.log('>> fixtures', barcaFixtures);

  var barcaGames = {};

  console.log('>> barcaGames', barcaGames);
}

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var response, responseBody;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _superagent2.default.get(process.env.LA_LIGA_API).set('X-Auth-Token', process.env.FOOTBALL_DATA_API_KEY).set('X-Response-Control', 'minified').set('Accept', 'application/json');

          case 3:
            response = _context.sent;
            responseBody = response.body;

            (0, _writeResponseToFile2.default)(responseBody);
            getBarcaGames(responseBody);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);

            console.log('>> some error', _context.t0);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));

  function getGameData() {
    return _ref.apply(this, arguments);
  }

  return getGameData;
}();