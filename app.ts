import express = require('express');

import todosRouters from './routes/todos'

import cors from 'cors'

import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use(todosRouters)

app.listen(3000)