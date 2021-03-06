'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BARCA_TEAM_ID = 81;
var LA_LIGA_COMPETITION_ID = 455;
var CHAMPIONS_LEAGUE_COMPETITION_ID = 464;
var COPA_DEL_REY_COMPETITION_ID = null;

function getCompetitionById(competitionId) {
  switch (competitionId) {
    case LA_LIGA_COMPETITION_ID:
      return 'La Liga';
    case CHAMPIONS_LEAGUE_COMPETITION_ID:
      return 'Champions League';
    default:
      return COPA_DEL_REY_COMPETITION_ID;
  }
}

function getBarcaGames(apiResponse) {
  var barcaFixtures = (0, _get2.default)(apiResponse, 'fixtures', []);

  barcaFixtures.forEach(function (fixture) {
    var fixtureDate = fixture.date;
    (0, _helpers.isTodayMatchDay)(fixtureDate);
    var fixtureCompetitionId = fixture.competitionId;
    var competition = getCompetitionById(fixtureCompetitionId);
    console.log('>> competition', competition);
  });
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
            return _superagent2.default.get(process.env.BARCA_FIXTURES_API).set('X-Auth-Token', process.env.FOOTBALL_DATA_API_KEY).set('X-Response-Control', 'minified').set('Accept', 'application/json');

          case 3:
            response = _context.sent;
            responseBody = response.body;
            // writeResponseToFile(responseBody);

            getBarcaGames(responseBody);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            console.log('>> some error', _context.t0);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  function getGameData() {
    return _ref.apply(this, arguments);
  }

  return getGameData;
}();