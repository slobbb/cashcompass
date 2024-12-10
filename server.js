require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const User = require('./backend/models/Users');
const Family = require('./backend/models/family');
const Transaction = require('./backend/models/transaction');
const Income = require('./backend/models/income');
const Expense = require('./backend/models/expense');

const userRoutes = require('./backend/routes/userRoutes');
const familyRoutes = require('./backend/routes/familyRoutes');
const expenseRoutes = require('./backend/routes/expenseRoutes');
const incomeRoutes = require('./backend/routes/incomeRoutes');
const transactionRoutes = require('./backend/routes/transactionRoutes');
const authRoutes = require('./backend/routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const port = process.env.PORT || 3000;

// Маршрут для аутентификации
// app.post('/api/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Поиск пользователя в базе данных
//         const user = await User.findOne({ username });
//         if (!user || user.password !== password) {
//             return res.status(401).json({ message: 'Неверные учетные данные' });
//         }

//         // Генерация токена
//         const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

//         // Возврат токена
//         res.json({ token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Ошибка сервера' });
//     }
// });

// Подключение маршрутов
app.use('/api/users', userRoutes);
app.use('/api/families', familyRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/incomes', incomeRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api', authRoutes);

// Запуск сервера
app.listen(port, () => console.log(`Server started on port ${port}`));