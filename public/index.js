"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var desinput = document.getElementById('des');
var addbtn = document.getElementById('addbtn');
var todolist = document.getElementById('todolist');
var axios_1 = __importDefault(require("axios"));
var count = 1;
addbtn.addEventListener('click', function () {
    var li = document.createElement('li');
    var desValue = desinput.value;
    li.innerHTML = desValue;
    todolist.appendChild(li);
    console.log(desValue);
    var obj = {
        id: count,
        des: desValue
    };
    axios_1.default.post('http://localhost:300/todo', obj).then(function (data) { return console.log(data); })
        .catch(function (err) { return console.log(err); });
});
