// Please do not change the name of this function
function getTweetData(tweet) {
  // Your code here
  const tweetLength = tweet.length;
  const mentions = tweet.match(/\B@\w+/g);
  const tags = tweet.match(/\B#\w+/g);

  return tweet.length === 0
    ? {
        tags: [],
        mentions: [],
        tagCount: 0,
        mentionCount: 0,
        length: 0,
      }
    : {
        tags: tags ? tags : [],
        mentions: mentions ? mentions : [],
        tagCount: tags ? tags.length : 0,
        mentionCount: mentions ? mentions.length : 0,
        length: tweetLength,
      };
}

module.exports = getTweetData;
