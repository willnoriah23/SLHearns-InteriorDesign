const db = require("../models");

module.exports ={
    formupdate: function(req, res) {
        console.log("this is the thing",req.body.room);
        db.Room.create(req.body.room)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};