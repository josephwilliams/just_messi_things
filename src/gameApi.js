import lodashFind from 'lodash/find';
import lodashGet from 'lodash/get';
import superagent from 'superagent';

import writeResponseToFile from './writeResponseToFile';

const BARCA_TEAM_ID = 81;
const LA_LIGA_COMPETITION_ID = 455;
const CHAMPIONS_LEAGUE_COMPETITION_ID = 464;
const COPA_DEL_REY_COMPETITION_ID = null;

function getBarcaGames(apiResponse) {
  console.log('>> keys', Object.keys(apiResponse));
  const barcaFixtures = lodashGet(apiResponse, 'fixtures', []);
  console.log('>> fixtures', barcaFixtures);

  const barcaGames = {};

  console.log('>> barcaGames', barcaGames);
}

export default async function getGameData() {
  try {
    const response = (
      await superagent
       .get(process.env.BARCA_FIXTURES_API)
       .set('X-Auth-Token', process.env.FOOTBALL_DATA_API_KEY)
       .set('X-Response-Control', 'minified')
       .set('Accept', 'application/json')
    );
    const responseBody = response.body;
    writeResponseToFile(responseBody);
    getBarcaGames(responseBody);
  }
  catch (error) {
    console.log('>> some error', error);
  }
}
