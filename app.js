const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Implement login logic here (e.g., check credentials)
    res.send(`Logged in as ${username}`);
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Implement signup logic here (e.g., save credentials)
    res.send(`Signed up as ${username}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
    