'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initializeRedditClient;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _snoowrap = require('snoowrap');

var _snoowrap2 = _interopRequireDefault(_snoowrap);

var _snoostorm = require('snoostorm');

var _snoostorm2 = _interopRequireDefault(_snoostorm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initializeRedditClient() {
  _dotenv2.default.config();

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