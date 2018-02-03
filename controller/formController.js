const db = require("../models");

module.exports ={
    formupdate: function(req, res) {
        console.log("this is the thing",req.body.room);
        db.Room.create(req.body.room)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    userformupd: function(req, res) {
        db.User.findOneAndUpdate({email: req.body.email},{room: req.body.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};