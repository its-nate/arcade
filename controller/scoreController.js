const db = require("../models");

module.exports = {
    globalTop: function(req, res) {
        db.Score.find({ gameName: req.params.name})
        .sort({score: -1})
        .limit(10)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    userTop: function(req, res) {
        db.Score.find({ userId: req.params.id, gameName: req.params.name})
        .sort({score: -1})
        .limit(10)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    postScore: function(req, res){
        db.Score.create({gameName: req.body.gameName, score: req.body.score, uid:req.body.uid})
        .then(DBscore => res.json(DBscore))
        .catch(err => res.status(500).json(err))
    }
};