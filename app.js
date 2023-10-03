"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var todos_1 = __importDefault(require("./routes/todos"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(todos_1.default);
app.listen(3000);
