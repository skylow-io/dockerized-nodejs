"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express_1 = __importDefault(require("express"));
const mongodb_1 = __importDefault(require("mongodb"));
const api_1 = require("./controllers/api");
// Create a new express application instance
const app = express_1.default();
const url = 'mongodb://localhost:27017';
mongodb_1.default.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('succesfully connected to mongoDB!');
    const db = client.db('skylow');
    const animalCollection = db.collection('animal');
    animalCollection.find().toArray((err, items) => {
        console.log(items);
    });
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/api', api_1.apiRoutes);
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
