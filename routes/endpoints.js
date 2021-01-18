const router = require("express").Router();
const pool = require("../models/database");

router.post("/", async (req, res) => {
  try {
    console.log("Creating your new task");
    const { title } = req.body;
    const { deadline } = req.body;
    const { status } = req.body;

    const newTask = await pool.query(
      "INSERT INTO tasks (title,deadline,status) VALUES ($1,$2,$3) RETURNING *",
      [title, deadline, status]
    );
    res.json(newTask.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("Showing your all task");
    const showTasks = await pool.query("SELECT * FROM tasks");
    res.json(showTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Showing your task No : " + [id]);
    const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    res.json(task.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/title/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  console.log("Updating title of task No : " + [id]);
  try {
    const updatetitle = await pool.query(
      "UPDATE tasks SET title = $1 WHERE id= $2",
      [title, id]
    );
    res.json("Title updated successfully.");
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/deadline/:id", async (req, res) => {
  const { id } = req.params;
  const { deadline } = req.body;
  console.log("Updating deadline of task : " + [id]);
  try {
    const updatetitle = await pool.query(
      "UPDATE tasks SET deadline = $1 WHERE id= $2",
      [deadline, id]
    );
    res.json("deadline updated successfully.");
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/status/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  console.log("Updating status of your task No : " + [id]);
  try {
    const updatetitle = await pool.query(
      "UPDATE tasks SET status = $1 WHERE id= $2",
      [status, id]
    );
    res.json("status updated successfully.");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting your task No : " + [id]);
    const deleteTask = await pool.query("DELETE FROM tasks WHERE id = $1", [
      id,
    ]);
    res.json("Task " + [id] + " is deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
