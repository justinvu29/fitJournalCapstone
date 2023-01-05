const list = document.getElementById('ul');
const form = document.getElementById('exercise-form')



// CREATE FEATURE 
const createExerciseList = arr => {
    list.innerHTML = 'Workout Program'
    arr.forEach((exerciseObj, index) => {
    let { exercise, weight, sets, reps } = exerciseObj
    const newListItem = document.createElement('li')
    newListItem.textContent = `${exercise} | ${weight} lbs | ${sets} sets x ${reps} reps`
    list.appendChild(newListItem)

// DELETE FEATURE
    let deleteButton = document.createElement('button')
    deleteButton.textContent = "delete"
    deleteButton.id = index
    deleteButton.addEventListener('click', deleteExercise)
    list.appendChild(deleteButton)
    deleteButton.className = "delete-button"
    
    })
}

//=====================
const samplebutton = document.querySelector('#getExample')
const workoutContainer = document.querySelector('#example-container')



const displayData = () => { workoutContainer.innerHTML = ``
    axios.get('http://localhost:4000/api/exercise').then(response => {
        response.data.forEach(element => {
            const newWorkout = document.createElement('p')
            newWorkout.textContent = element.workout
            workoutContainer.appendChild(newWorkout)

        })
    })
  }

  samplebutton.addEventListener('click', displayData)
  //=========================

const submitExercise = evt => {
    evt.preventDefault()
    const exerciseName = document.getElementById('exercise-name').value
    const weight = document.getElementById('weight').value
    const sets = document.getElementById('sets').value
    const reps = document.getElementById('reps').value
    axios.post('http://localhost:4000/api/exercise', {exercise: exerciseName, weight: weight, sets: sets, reps: reps})
        .then(response => {
            let { data } = response
            createExerciseList(data)
            form.reset()
        })
        .catch(err => console.log(err))
}

const deleteExercise = evt => {
    evt.preventDefault()
    axios.delete(`http://localhost:4000/api/exercise/${evt.target.id}`)
        .then(response => {
            let { data } = response
            createExerciseList(data)
        })
        .catch(err => console.log(err))
}


form.addEventListener('submit', submitExercise)
