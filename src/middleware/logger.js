
// logger middleware
const logger = (req, res, next) => {

    // CRUD işlemlerini alma
    const method = req.method;

    // endpoint adresleme
    const endpoint = req.originalUrl;

    // zaman damgaı
    const timestamp = new Date().toISOString();

    // ekrana yazdırma
    console.log(`[${timestamp}]  ${method} ${endpoint}`);

    // sonraki aşama
    next();
};

// sonraki js aşamalarında kullanma
module.exports = logger;
