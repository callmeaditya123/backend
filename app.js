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
sequelize.sync({ force: false }) // Set `true` untuk reset database mode dev
.then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})

.catch((error) => console.error('Unable to sync database:', error));