const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

app.use('/', studentsController);
app.use('*', errorController);

app.get('/', (req, res) => {
  res.render('Home', { title: 'Home' });
});

app.get('/success', (req, res) => {
  res.render('Success', { title: 'Success' });
});

app.get('/students-list', (req, res) => {
  res.render('List', { title: 'List' });
});

app.post('/add-student', (req, res) => {
  res.redirect('/add-student');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
