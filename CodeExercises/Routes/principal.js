import express from 'express';
const app = express();

// Middleware JSON declarado antes
app.use(express.json());

// Importar routers
import usersRouter from './Users.js';
import productsRouter from './Products.js';

// Usar routers
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
