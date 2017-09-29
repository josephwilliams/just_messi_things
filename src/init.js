import dotenv from 'dotenv';

import Snoowrap from 'snoowrap';
import Snoostorm from 'snoostorm';


export default function initializeRedditClient() {
  dotenv.config();

  // Build Snoowrap and Snoostorm clients
  // const redditAuth = new Snoowrap({
  //   userAgent: 'reddit-bot-example-node',
  //   clientId: process.env.CLIENT_ID,
  //   clientSecret: process.env.CLIENT_SECRET,
  //   username: process.env.REDDIT_USER,
  //   password: process.env.REDDIT_PASS
  // });
  //
  // const redditClient = new Snoostorm(redditAuth);
  // return redditClient;
}
