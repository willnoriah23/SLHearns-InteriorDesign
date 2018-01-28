const mongoose = require('mongoose');


// SCHEMA SETUP
const roomSchema = new mongoose.Schema({
    address: String,
    phone_number: {
        type: String,
        required: true
    },
    budget: String,
    family_size: String,
    room: {
        kitchen: {
            primary_cook: Boolean
        },
        bath: {
            master_bath: Boolean,
            secondary_bath: Boolean,
        }
    },
    love: String,
    hate: String
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;