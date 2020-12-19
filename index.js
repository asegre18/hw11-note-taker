require('dotenv')
  .config();
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT, () => console.log(`server started at http://localhost:3000`));

app.use('/', express.static('./public'));

app.use('/notes', express.static('./public/notes.html'));