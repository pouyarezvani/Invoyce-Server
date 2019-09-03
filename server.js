// SECTION Modules

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

// SECTION MiddleWare

// BodyParser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Custom Logger MiddleWare
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleString();
    console.log({ url, method, requestedAt });
    next();
});

// User Session
app.use(session({
    secret: 'I will be the best!',
    resave: false,
    saveUninitialized: false
}));

const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// SECTION Routes

// Get Root Route
app.get('/', (req, res) => res.send('<h1>This is the backend root route</h1>'));

// Auth Routes
app.use('/api/v1/auth', routes.auth);

// Users Routes
app.use('/api/v1/users', routes.users);

// Invoices Route
app.use('/api/v1/invoices', routes.invoices);

// Clients Route
app.use('/api/v1/clients', routes.clients);

// Items Route 
app.use('/api/v1/items', routes.items);

// SECTION Start Server

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))