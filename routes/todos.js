"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todo = [];
var router = (0, express_1.Router)();
router.get('/', function (req, res, next) {
    res.status(200).json({ todo: todo });
});
router.post('/todo', function (req, res, next) {
    var newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todo.push(newTodo);
    res.status(201).json({ message: 'added todo', todo: newTodo });
});
router.put('/todo/:id', function (req, res, next) {
    var tid = req.params.id;
    var todoindex = todo.findIndex(function (todoItem) { return todoItem.id == tid; });
    if (todoindex >= 0) {
        todo[todoindex] = { id: todo[todoindex].id, text: req.body.text };
        return res.status(200).json('successfuly edit the message');
    }
    res.status(404).json({ messge: 'could not find the todo for this id.' });
});
router.delete('/todo/:id', function (req, res, next) {
    todo = todo.filter(function (todoitem) { return todoitem.id !== req.params.id; });
    res.status(200).json({ message: 'Deleted todo', todo: todo });
});
exports.default = router;
