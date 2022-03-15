import { Router } from 'express' //ts
//normally seen this way in regular js
// const express = require('express)
// const Router = express.Router

import {
	createTodo,
	getTodos,
	updateTodo,
	deleteTodo,
} from '../controllers/todo'

const router = Router() // allows us to register middleware

// Add a new todo
// /todos/nothing
router.post('/', createTodo)

// Get all todos
router.get('/', getTodos)

// Update a todo
router.patch('/:id', updateTodo)

// Delete a todo
router.delete('/:id', deleteTodo)

export default router
