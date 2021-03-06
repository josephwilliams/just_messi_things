'use strict';

var _init = require('./init');

var _init2 = _interopRequireDefault(_init);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redditClient = (0, _init2.default)();

// Configure options for stream: subreddit & results per query
// const streamOpts = {
//   subreddit: 'all',
//   results: 1
// };

// Create a Snoostorm CommentStream with the specified options
// const comments = redditClient.CommentStream(streamOpts);

// On comment, perform whatever logic you want to do
// comments.on('comment', (comment) => {
//   console.log('> new comment: ', comment);
// });

(0, _api2.default)();