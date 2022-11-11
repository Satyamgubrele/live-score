const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    scoreId: {
        type: Number,
        default: 1
    },
    teamName: {
        type: String,
        required: true
    },
    totalScore: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;