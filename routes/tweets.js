var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const Tweet = require('../models/tweets');
require('../models/connection')
const User = require('../models/users');
const uid2 = require('uid2');

router.post('/:token', (req,res) => {
        User.findOne({ token: req.params.token }).then(data => {
            console.log(data);
      if (data) {
        // res.json({ result: true});
        const newTweet = new Tweet ({
            content: req.body.content,
            user: data._id,
            like: [],
            hashtag: req.body.hashtag,
            token: uid2(32),
        })
        newTweet.save().then(newDoc => {
            
            res.json({result: true, token: newDoc.token})
        })
      } else {
        res.json({ result: false, error: 'User not found' });
      }
    });

})

    router.get('/', (req, res) => {
        Tweet.find().populate('user', '-_id username name') //permet de trouver le user auteur du tweet et '- ....' permet de retirer le id et de display les infos qu'on veut
        .then(data => {
            res.json({data: data});
        })
    })

    // router.post('/signin', (req, res) => {
    //     if ((req.body, ['username', 'password'])) {
    //       res.json({ result: false, error: 'Missing or empty fields' });
    //       return;
    //     }


module.exports = router;



