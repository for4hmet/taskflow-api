// görev verileri içe aktarma
const tasks = require("../data/tasks");

// Yeni görevler için sıradaki benzersiz ID
let nextTaskId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;

// Bütün görevleri listeleme
const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

// görev oluşturma ve ekleme
const createTask = (req, res) => {
  // Görev başlığı kontrolü
  if (typeof req.body.title !== "string" || !req.body.title.trim()) {
    return res.status(400).json({
      message: "Görev başlığı zorunludur",
    });
  }

  const newTask = {
    id: nextTaskId++,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
    assignee: req.body.assignee,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

// Görev Id getir ; GET işlemi

const getTaskById = (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Görev Bulunamadı",
    });
  }

  res.status(200).json(task);
};

// PUT İşlemi

const updateTask = (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Görev Bulunamadı",
    });
  }

  task.title = req.body.title ?? task.title;
  task.description = req.body.description ?? task.description;
  task.status = req.body.status ?? task.status;
  task.priority = req.body.priority ?? task.priority;
  task.assignee = req.body.assignee ?? task.assignee;

  res.status(200).json(task);
};

// Görev Silme ;  DELETE işlemi
const deleteTask = (req, res) => {
  const taskId = Number(req.params.id);

  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Görev Bulunamadı",
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.status(200).json({
    message: "Görev başarıyla silindi",
    task: deletedTask[0],
  });
};

// diğer dosyalara kullanma
module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
