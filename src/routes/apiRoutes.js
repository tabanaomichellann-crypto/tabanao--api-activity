const express = require('express');
const router = express.Router();

// Import dish controller functions
const {
  getAllDishes,
  createDish,
  getDishById,
  updateDish,
  deleteDish
} = require('../controllers/dishController');

// Routes
router.get('/dishes', getAllDishes);
router.post('/dishes', createDish);
router.get('/dishes/:id', getDishById);
router.put('/dishes/:id', updateDish);
router.delete('/dishes/:id', deleteDish);

module.exports = router;

// 1. If user sends GET request (show menu) → ask chef to get all dishes
router.get('/dishes', getAllDishes);

// 2. If user sends POST request (new order) → ask chef to create dish
router.post('/dishes', createDish);

// 3. If user sends GET request with ID (specific meal) → ask chef to get dish by ID
router.get('/dishes/:id', getDishById);

// 4. If user sends PUT request with ID (change meal) → ask chef to update dish
router.put('/dishes/:id', updateDish);

// 5. If user sends DELETE request with ID (cancel meal) → ask chef to delete dish
router.delete('/dishes/:id', deleteDish);

module.exports = router;
