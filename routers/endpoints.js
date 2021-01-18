const router = require("express").Router();
const pool = require("../models/database");

// CRUD operations
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
    const searchId = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    res.json(searchId.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/title/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    console.log("Updating title of task No : " + [id]);
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
  try {
    const { id } = req.params;
    const { deadline } = req.body;
    console.log("Updating deadline of task : " + [id]);
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
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log("Updating status of your task No : " + [id]);
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

// Sorting (priority)
router.get("/priority/status", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Tasks priority on the basis of status.");
    const priorityStatus = await pool.query(
      "SELECT title FROM tasks ORDER BY status ASC"
    );
    res.json(priorityStatus.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/priority/deadline", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Tasks priority on the basis of deadlines.");
    const priorityDeadline = await pool.query(
      "SELECT title FROM tasks ORDER BY deadline ASC"
    );
    res.json(priorityDeadline.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Searching
router.get("/search/title", async (req, res) => {
  try {
    const { title } = req.params;
    console.log("Showing your task No : " + [id]);
    const searchTitle = await pool.query("SELECT * FROM tasks WHERE title = $1, [title]);
    res.json(searchTitle.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

