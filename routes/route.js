const express = require('express');
const router = express.Router();

const { sendSuccess, sendError } = require('../utilities/helpers');

const Score = require('../schema/score')

router.get('/test', (req, res) => {
    res.send('Test');
});

router.get('/score', async (req, res) => {
    const score = await Score.findOne({ scoreId: 1 });
    if(!score)
        return sendSuccess(res, 'Score is not present.');

    return sendSuccess(res, score);
})

router.post('/saveScore', async (req, res) => {
    const { teamName, totalScore } = req.body;

    // check if score is present with id = 1
    let score = await Score.findOne({ scoreId: 1 })

    if(score){
        score = await Score.findOneAndUpdate({ scoreId: 1 }, {
            teamName: teamName,
            totalScore: totalScore
        })

        score.save()
            .then(()=>{
                console.log('Score is updated.')
                return sendSuccess(res, 'Score is updated')
            })
            .catch(err => {
                console.error(err);
                return sendError(res, 'Score is not updated.', 500);                
            })
    }else{
        score = new Score({
            teamName: teamName,
            totalScore: totalScore
        })
    
        score.save()
            .then(()=>{
                console.log('Score is saved')
                return sendSuccess(res, 'Score is saved');
            })
            .catch(err => {
                console.log(err)
                return sendError(res, 'Score is not saved.', 500)
            })
    }
})

module.exports = router;