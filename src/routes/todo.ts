import { Router } from 'express' //ts
//normally seen this way in regular js
// const express = require('express)
// const Router = express.Router

const router = Router() // allows us to register middleware

// Add a new todo
router.post('/')

// Get all todos
router.get('/')

// Update a todo
router.patch('/:id')

// Delete a todo
router.delete('/:id')

export default router
