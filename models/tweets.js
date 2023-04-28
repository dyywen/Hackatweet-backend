const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  content: String,
  user: { type: mongoose.Types.ObjectId, ref: 'users' },
  like: Array,
  hashtag: String,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;