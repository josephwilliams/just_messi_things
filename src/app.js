import initializeRedditClient from './init';
import getGameData from './gameApi';

const redditClient = initializeRedditClient();

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

getGameData();
