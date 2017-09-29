import lodashGet from 'lodash/get';
import moment from 'moment';


const BARCA_TEAM_ID = 81;
const LA_LIGA_COMPETITION_ID = 455;
const CHAMPIONS_LEAGUE_COMPETITION_ID = 464;
const COPA_DEL_REY_COMPETITION_ID = null;

export function getBarcaGames(apiResponse) {
  const barcaFixtures = lodashGet(apiResponse, 'fixtures', []);
  barcaFixtures.forEach((fixture) => getMatchInfo(fixture));
}

function isTodayMatchDay(date) {
  // example date format: 2017-08-26T16:15:00Z
  const today = new Date();
  const todayFormatted = moment(today).format('YYYY-MM-DD');

  const matchDay = moment(date);
  const matchDayFormatted = matchDay.format('YYYY-MM-DD');

  return moment(todayFormatted).isSame(matchDayFormatted, 'day');
}

function getCompetitionById(competitionId) {
  switch (competitionId) {
    case LA_LIGA_COMPETITION_ID:
      return 'La Liga';
    case CHAMPIONS_LEAGUE_COMPETITION_ID:
      return 'Champions League';
    default:
      // TODO: find copa del rey competition id.
      return COPA_DEL_REY_COMPETITION_ID;
  }
}

function getIsHomeGame(fixture) {
  const fixtureHomeTeamId = fixture.homeTeamId;
  const isHomeGame = (fixtureHomeTeamId === BARCA_TEAM_ID);
  return isHomeGame;
}

function getCompetition(fixture) {
  const fixtureCompetitionId = fixture.competitionId;
  const competition = getCompetitionById(fixtureCompetitionId);
  return competition;
}

function getIsWin(fixture) {
  const isHomeGame = getIsHomeGame(fixture);
  const score = lodashGet(fixture, 'result');
  const goalsHomeTeam = lodashGet(score, 'goalsHomeTeam', 0);
  const goalsAwayTeam = lodashGet(score, 'goalsAwayTeam', 0);
  const isWinAtHome = (isHomeGame && (goalsHomeTeam > goalsAwayTeam));
  const isWinAway = (!isHomeGame && (goalsAwayTeam > goalsHomeTeam));
  return (isWinAtHome || isWinAway);
}

function getIsWinningAtHalf(fixture) {
  const isHomeGame = getIsHomeGame(fixture);
  const scoreAtHalf = lodashGet(fixture, 'result.halfTime');
  const goalsHomeTeam = lodashGet(scoreAtHalf, 'goalsHomeTeam', 0);
  const goalsAwayTeam = lodashGet(scoreAtHalf, 'goalsAwayTeam', 0);
  const isWinningAtHalfAtHome = (isHomeGame && (goalsHomeTeam > goalsAwayTeam));
  const isWinningAtHalfAway = (!isHomeGame && (goalsAwayTeam > goalsHomeTeam));
  return (isWinningAtHalfAtHome || isWinningAtHalfAway);
}

function getMatchInfo(fixture) {
  const fixtureDate = fixture.date;
  const isMatchday = isTodayMatchDay(fixtureDate);

  const matchInfo = {};
  // TODO: revert this to only do logic if is match day.
  // if (isMatchday) {

  const competition = getCompetition(fixture);
  const isHomeGame = getIsHomeGame(fixture);
  const isWinningAtHalf = getIsWinningAtHalf(fixture);
  const isWin = getIsWin(fixture);

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
