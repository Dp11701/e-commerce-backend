const express = require("express");
const router = express.Router();
const {
  getOrderDetailAsync,
  updateOrderAsync,
  createOrderAsync,
  deleteOrderByIdAsync,
  cancelOrder,
  searchOrderAsync,
} = require("../controllers/orderController");

// Get order details by ID
router.get("/:id/details", getOrderDetailAsync);

// Update order information by ID
router.patch("/:id/updateInfo", updateOrderAsync);

// Create a new order
router.post("/", createOrderAsync);

// Delete order by ID
router.delete("/:id", deleteOrderByIdAsync);

// Cancel an order by ID
router.patch("/:id/cancelOrder", cancelOrder);

// Search orders
router.post("/search", searchOrderAsync);

module.exports = router;
