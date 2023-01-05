const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { addExerciseToList, deleteExercise, getSample } = require('./controller')

app.get('/api/exercise', getSample)
app.post('/api/exercise', addExerciseToList)
app.delete('/api/exercise/:index', deleteExercise)



app.listen(4000, () => console.log("Server running on 4000"));
