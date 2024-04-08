const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('Home', { title: 'Add new student' });
});

router.post('/add-student', (req, res) => {
  const { fullName, code, fieldOfStudies } = req.body;
  console.log(`New student added: ${fullName}, ${code}, ${fieldOfStudies}`);
  res.redirect('/');
});

module.exports = router;
