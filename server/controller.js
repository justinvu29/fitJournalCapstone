exerciseList = []
const database = require('./db.json')


module.exports = {

    getSample: (req,res) => {
        res.status(200).send(database)
    },
    
    addExerciseToList: (req,res) => {
        console.log(req.body)
        exerciseList.push(req.body)
        res.status(200).send(exerciseList)
    },

    deleteExercise: (req,res) => {
        let { index } = req.params
        exerciseList.splice(index,1)
        res.status(200).send(exerciseList)
    }

}