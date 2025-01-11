import express from 'express';
import { Product } from './db.js';  // Importamos el modelo Product
const router = express.Router();

// Obtener lista de productos (GET)
router.get('/', async (req, res) => {
  try {
    const { category, sort = 'asc' } = req.query;
    const products = await Product.findAll();  // Usamos el modelo Product para obtener todos los productos

    // Filtrando por categoría si es necesario
    const filteredProducts = products.filter(p =>
      category ? p.category.toLowerCase() === category.toLowerCase() : true
    );

    // Ordenando por precio
    const sortedProducts = filteredProducts.sort((a, b) =>
      sort === 'asc' ? a.price - b.price : b.price - a.price
    );

    res.json(sortedProducts);  // Respondemos con los productos filtrados y ordenados
  } catch (error) {
    res.status(500).send('Error al obtener los productos');
  }
});

// Obtener un producto específico (GET)
router.get('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByPk(productId);  // Usamos el modelo Product para obtener un producto por ID

    if (!product) return res.status(404).send('Producto no encontrado');
    res.json(product);
  } catch (error) {
    res.status(500).send('Error al obtener el producto');
  }
});

// Crear un nuevo producto (POST)
router.post('/', async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const newProduct = await Product.create({ name, price, category });  // Usamos el modelo Product para crear un nuevo producto
    res.status(201).json(newProduct);  // Respondemos con el producto creado
  } catch (error) {
    res.status(500).send('Error al crear el producto');
  }
});

// Actualizar un producto existente (PUT)
router.put('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price, category } = req.body;
    const product = await Product.findByPk(productId);  // Encontramos el producto por su ID

    if (!product) return res.status(404).send('Producto no encontrado');

    // Actualizamos los datos del producto
    product.name = name;
    product.price = price;
    product.category = category;
    await product.save();  // Guardamos los cambios

    res.json(product);
  } catch (error) {
    res.status(500).send('Error al actualizar el producto');
  }
});

// Eliminar un producto (DELETE)
router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByPk(productId);  // Encontramos el producto por su ID

    if (!product) return res.status(404).send('Producto no encontrado');

    await product.destroy();  // Eliminamos el producto
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).send('Error al eliminar el producto');
  }
});

export default router;
