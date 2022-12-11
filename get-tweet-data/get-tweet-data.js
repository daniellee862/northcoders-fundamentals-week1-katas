// Please do not change the name of this function
function getTweetData(tweet) {
  // Your code here
  const tweetLength = tweet.length;
  const mentionRegex = /\B@\w+/g;
  const mentions = tweet.match(mentionRegex);
  const tagRegex = /\B#\w+/g;
  const tags = tweet.match(tagRegex);

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
