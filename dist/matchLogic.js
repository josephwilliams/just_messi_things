'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBarcaGames = getBarcaGames;

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BARCA_TEAM_ID = 81;
var LA_LIGA_COMPETITION_ID = 455;
var CHAMPIONS_LEAGUE_COMPETITION_ID = 464;
var COPA_DEL_REY_COMPETITION_ID = null;

/*
  const sampleMatchInfo = {
    competition: null,
    isHomeGame: null,
    result: {
      goalsHomeTeam: 0,
      goalsAwayTeam: 0,
      halfTime: {
        goalsHomeTeam: 0,
        goalsAwayTeam: 0
      },
    },
  };
*/

function getBarcaGames(apiResponse) {
  var barcaFixtures = (0, _get2.default)(apiResponse, 'fixtures', []);
  barcaFixtures.forEach(function (fixture) {
    return getMatchInfo(fixture);
  });
}

function isTodayMatchDay(date) {
  // example date format: 2017-08-26T16:15:00Z
  var today = new Date();
  var todayFormatted = (0, _moment2.default)(today).format('YYYY-MM-DD');

  var matchDay = (0, _moment2.default)(date);
  var matchDayFormatted = matchDay.format('YYYY-MM-DD');

  return (0, _moment2.default)(todayFormatted).isSame(matchDayFormatted, 'day');
}

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

function getIsHomeGame(fixture) {
  var fixtureHomeTeamId = fixture.homeTeamId;
  var isHomeGame = fixtureHomeTeamId === BARCA_TEAM_ID;
  return isHomeGame;
}

function getCompetition(fixture) {
  var fixtureCompetitionId = fixture.competitionId;
  var competition = getCompetitionById(fixtureCompetitionId);
  return competition;
}

function getIsWin(fixture) {
  var isHomeGame = getIsHomeGame(fixture);
  var score = (0, _get2.default)(fixture, 'result');
  var goalsHomeTeam = Number(score.goalsHomeTeam);
  var goalsAwayTeam = Number(score.goalsAwayTeam);
  var isWinAtHome = isHomeGame && goalsHomeTeam > goalsAwayTeam;
  var isWinAway = !isHomeGame && goalsAwayTeam > goalsHomeTeam;
  return isWinAtHome || isWinAway;
}

function getIsWinningAtHalf(fixture) {
  var isHomeGame = getIsHomeGame(fixture);
  var scoreAtHalf = (0, _get2.default)(fixture, 'result.halfTime');
  var goalsHomeTeam = (0, _get2.default)(scoreAtHalf, 'goalsHomeTeam', 0);
  var goalsAwayTeam = (0, _get2.default)(scoreAtHalf, 'goalsAwayTeam', 0);
  var isWinningAtHalfAtHome = isHomeGame && goalsHomeTeam > goalsAwayTeam;
  var isWinningAtHalfAway = !isHomeGame && goalsAwayTeam > goalsHomeTeam;
  return isWinningAtHalfAtHome || isWinningAtHalfAway;
}

function getMatchInfo(fixture) {
  var fixtureDate = fixture.date;
  var isMatchday = isTodayMatchDay(fixtureDate);

  var matchInfo = {};
  // if (isMatchday) {

  var competition = getCompetition(fixture);
  var isHomeGame = getIsHomeGame(fixture);
  var isWinningAtHalf = getIsWinningAtHalf(fixture);
  var isWin = getIsWin(fixture);

  matchInfo.competition = competition;
  matchInfo.result = fixture.result;
  matchInfo.isHomeGame = isHomeGame;
  matchInfo.isWin = isWin;
  matchInfo.isWinningAtHalf = isWinningAtHalf;
  // }

  // return (isTodayMatchDay ? matchInfo : null);
  console.log('> matchInfo', matchInfo);
  return matchInfo;
}