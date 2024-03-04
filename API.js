const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is data from the backend API.' });
});

app.post('/api/contact-details', (req, res) => {
    // Access the data sent from the frontend
    const userData = req.body;
    console.log('Received data from frontend:', userData);

    // Respond back to the frontend
    res.json({ success: true, message: 'Data received successfully', data: userData });
});

