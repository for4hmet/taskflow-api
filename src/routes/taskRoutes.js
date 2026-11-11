// express kütüphane
const express = require("express");

// yönlendirme
const router = express.Router();

// GET ve POST isteğine karşılama ve yönlendirme
const {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/taskController");


// Görevleri listeleme ; yönlendirme
router.get("/", getAllTasks);

// Yeni görev oluşturma ; yönlendirme
router.post("/", createTask);

// Görev ID ; yönlendirme
router.get("/:id", getTaskById);

// PUT işlemi ; yönlendirme
router.put("/:id", updateTask);

// DELETE işlemi ; yönlendirme
router.delete("/:id", deleteTask);


module.exports = router;
