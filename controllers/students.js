
const express = require("express");
const router = express.Router();

let students = [];
let nextId = 1;

router.get("/", (req, res) => {
  res.render("Home", { title: "Add new student" });
});

router.post("/add-student", (req, res) => {
  const { fullName, code, fieldOfStudies } = req.body;
  console.log(`New student added: ${fullName}, ${code}, ${fieldOfStudies}`);

  students.push({id: nextId,fullName,code,fieldOfStudies,});
  nextId++;
  res.redirect("/success");
});

module.exports = router;