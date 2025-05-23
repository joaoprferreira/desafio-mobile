const app = require('express')()
const bodyParser = require('body-parser')
const tasksContainer = require('./tasks.json')

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  return res.status(200).json(tasksContainer)
})

/**
 * Get /task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find((item) => item.id === id)

    if (task) {
      return res.status(200).json({
        task,
      })
    } else {
      return res.status(404).json({
        message: 'Not found.',
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    })
  }
})

/**
 * PUT /task/update/
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/update', (req, res) => {
  const id = parseInt(req.body.id, 10)
  const { title, description, completed } = req.body

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find((item) => item.id === id)

    if (task !== null) {
      if (title !== undefined) task.title = title
      if (description !== undefined) task.description = description
      if (completed !== undefined) task.completed = completed

      return res.status(200).json({
        task,
      })
    } else {
      return res.status(404).json({
        message: 'Not found',
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    })
  }
})

/**
 * POST /task/create
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/create', (req, res) => {
  const task = {
    id: tasksContainer.tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    done: false,
  }

  tasksContainer.tasks.push(task)

  return res.status(201).json({
    message: 'Resource created',
  })
})

/**
 * DELETE /task/delete
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/delete', (req, res) => {
  const id = parseInt(req.body.id, 10)

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find((item) => item.id === id)

    if (task) {
      const taskIndex = tasksContainer.tasks
      tasksContainer.tasks.splice(taskIndex, 1)
      return res.status(200).json({
        message: 'Updated successfully',
      })
    } else {
      return es.status(404).json({
        message: 'Not found',
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    })
  }
})

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n')
})
