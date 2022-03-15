// One way of doing this is below, the better was is farther down
// import {Request, Response, NextFunction} from 'express'

// // Another way of doing req: express.Request, res: express.Response ....
// export const createTodo = (req: Request, res: Response, next: NextFunction) => {
// }

// Better way
import { RequestHandler } from 'express' //ts

import { Todo } from '../models/todo'

const TODOS: Todo[] = [] // imported from model folder todo.ts

// Request Handler gives the 3 types request, response, next, //must have express types installed
export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text //type casting since we know what it should be
	const newTodo = new Todo(Math.random().toString(), text)

	TODOS.push(newTodo)
	res.status(201).json({ message: 'Created the todo', createdTodo: newTodo })
}

export const getTodos: RequestHandler = (req, res, next) => {
	res.json({ todos: TODOS })
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
	const id = req.params.id
	const updatedText = (req.body as { text: string }).text
	const todoIndex = TODOS.findIndex((todo) => todo.id === id)

	if (todoIndex < 0) {
		throw new Error('Could not find todo')
	}

	TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)
	res.json({ message: 'updated', updatedTodo: TODOS[todoIndex] })
}

export const deleteTodo: RequestHandler = (req, res, next) => {
	const id = req.params.id
	const todoIndex = TODOS.findIndex((todo) => todo.id === id)

	if (todoIndex < 0) {
		throw new Error('Could not find todo')
	}

	TODOS.splice(todoIndex, 1) // removes the todo that needs removing
	res.json({ message: 'Todo deleted' })
}
