import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Importar los modelos para que Sequelize los conozca
import User from './models/user.js'; 
import Product from './models/product.js';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Inicializar Sequelize con la conexión a PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Nombre de la base de datos
  process.env.DB_USER,      // Usuario
  process.env.DB_PASSWORD,  // Contraseña
  {
    host: process.env.DB_HOST,  // Host de la base de datos
    dialect: 'postgres',       // Usamos PostgreSQL
    logging: false,            // Desactivar el logging de las consultas SQL (opcional)
  }
);

// Verificar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();  // Intenta autenticar la conexión
    console.log('Conexión exitosa a la base de datos');
    await syncModels();  // Sincroniza los modelos después de la conexión exitosa
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

// Sincronizar los modelos con la base de datos
async function syncModels() {
  try {
    // Sincroniza los modelos con la base de datos (esto crea las tablas si no existen)
    await sequelize.sync({ force: false });  // 'force: false' evita borrar tablas existentes
    console.log('Modelos sincronizados correctamente');
  } catch (error) {
    console.error('Error al sincronizar los modelos:', error);
  }
}

// Ejecutar la conexión y sincronización
testConnection();

// Exportar Sequelize y los modelos para usarlos en otras partes
export { sequelize, User, Product };
