const db = require("../models");

module.exports ={
    formupdate: function(req, res) {
        db.User.findOneAndUpdate({email: req.body.email}, {room: req.body.room})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};