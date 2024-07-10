const express = require('express');
const app = express();
const tokenRoutes = require('./routes/tokenRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use(express.json());
app.use('/', tokenRoutes);
app.use('/', quoteRoutes);
app.use('/', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
