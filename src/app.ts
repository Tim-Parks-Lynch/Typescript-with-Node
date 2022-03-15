// require has a problem below because ts doesn't know about it
// npm install --save-dev @types/node will resolve the issue
// for auto completion also install: npm install --save-dev @types/express

// regular node js syntax but we don't need that in typescript instead we can use import
// const express = require('express') // node syntax
import express from 'express'
// could also be import express, {Request, Response, NextFunction } from 'express' for your error handling route below

import todoRoutes from './routes/todo'

const app = express()

//Todo Rest API route
app.use('/todo', todoRoutes) //request targeting /todo will go here

// Error handling route
// could also be app.use((err:Error, req: Request, res: Response, next: NextFunction)) if you imported above
app.use(
	(
		err: Error,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		res.status(500).json({ message: err.message })
	}
)

app.listen(3000)
