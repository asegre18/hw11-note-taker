const express = require('express');
const routes = require('./routes');
let path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(3000, () => console.log(`server started at http://localhost:3000`));

app.use('/', express.static('./public'));

app.use('/notes', express.static('./public/notes.html'));