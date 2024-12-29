const express = require('express');

const bodyParser = require('body-parser');

const sequelize = require('./config');
const cors = require("cors")
const contactRoutes = require('./routers/contactRoutes');


const app = express();

const PORT = 3000;


// Middleware
app.use(cors())
app.use(bodyParser.json());


// Routes
app.use('/api',contactRoutes);


// Sinkronisasi database dan mulai server
sequelize
.authenticate()
.then(() => {
    console.log("Koneksi ke database berhasil");

    return sequelize.sync({ force: false });
    })
.then(async () => {
    console.log('Server running on port: ${PORT}');
    app.listen(PORT, () => console.log('Server running on port: ${PORT}'));
    })
.catch((err) => {
    console.log("Unable to sync database: ", err);
    });

process.on("SIGINT", async () => {
    try {
    await sequelize.close();

    console.log("Koneksi ke database ditutup.");
} catch (err) {
    throw new Error("Error saat menutup database");
} finally {
    process.exit(0);
}
});

module.exports = app