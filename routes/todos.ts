import {Router} from 'express';

import {Todo} from '../models/todo'

let todo : Todo[] = [];

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({todo: todo})
}) 

router.post('/todo', (req, res, next) =>{
    const newTodo: Todo =  {
        id: new Date().toISOString(),
        text: req.body.text
    };

    todo.push(newTodo)
    res.status(201).json({message: 'added todo', todo: newTodo})
})

router.put('/todo/:id', (req, res, next) => {
    const tid = req.params.id;
    const todoindex = todo.findIndex(todoItem => todoItem.id == tid);
    if(todoindex>=0){
        todo[todoindex] = {id : todo[todoindex].id , text: req.body.text};
        return res.status(200).json('successfuly edit the message')
    }
    res.status(404).json({messge: 'could not find the todo for this id.'})
})


router.delete('/todo/:id', (req, res, next) => {
    todo = todo.filter(todoitem => todoitem.id !== req.params.id);
    res.status(200).json({message: 'Deleted todo', todo: todo})
});


export default router;
