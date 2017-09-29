'use strict';

var _init = require('./init');

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redditClient = (0, _init2.default)();

// Configure options for stream: subreddit & results per query
var streamOpts = {
  subreddit: 'all',
  results: 1
};

// Create a Snoostorm CommentStream with the specified options
var comments = redditClient.CommentStream(streamOpts);

// On comment, perform whatever logic you want to do
comments.on('comment', function (comment) {
  console.log('> new comment: ', comment);
});