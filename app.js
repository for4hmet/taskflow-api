// expres kütüphanesi 
const express = require("express");

// Logger Middleware 
const logger = require("./src/middleware/logger");

// tasks.js : görev
const tasks = require("./src/data/tasks");

// taskRoutes.js : yönlendirme
const taskRoutes = require("./src/routes/taskRoutes");

// Express Uygulaması
const app = express();

// API gönderilen JSON verileri express ile okunabilirlik
app.use(express.json());

// middleware etkineleştirme
app.use(logger);

// görev yönlendirme
app.use("/tasks", taskRoutes);


// sunulacak port
const PORT = 3000;



// get isteği karşılama ve yanıt 
app.get("/", (req, res) => {
    res.send("TASKFLOW API ÇALIŞIYOR !");
});



// Sunucu dinleme
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});


