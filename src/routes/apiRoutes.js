const express = require('express');
const router = express.Router();

// Dish Controller
const {
  getAllDishes,
  createDish,
  getDishById,
  updateDish,
  deleteDish,
} = require('../controllers/dishController');

// Chef Controller
const {
  createChef,
  getAllChefs,
} = require('../controllers/chefControllers');

// =====================
// Chef Routes
// =====================
router.post('/chefs', createChef);
router.get('/chefs', getAllChefs);

// =====================
// Dish Routes
// =====================

// 1. GET /dishes → Get all dishes (Show menu)
router.get('/dishes', getAllDishes);

// 2. POST /dishes → Create a new dish
router.post('/dishes', createDish);

// 3. GET /dishes/:id → Get a specific dish by ID
router.get('/dishes/:id', getDishById);

// 4. PUT /dishes/:id → Update a dish
router.put('/dishes/:id', updateDish);

// 5. DELETE /dishes/:id → Delete a dish
router.delete('/dishes/:id', deleteDish);

module.exports = router;
