const Order = require("../models/orderModels");

// Controller function for getting order details
const getOrderDetailAsync = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const orderDetail = await Order.findById(orderId); // Assuming you have a method to find order by ID in your model
    return res.json(orderDetail);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: "INTERNAL_SERVER_ERROR",
      errorDetails: ["An internal server error occurred"],
      data: null,
    });
  }
};

// Controller function for updating an order
const updateOrderAsync = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const updateOrderRequest = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      updateOrderRequest,
      { new: true }
    );
    return res.json(updatedOrder);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: "INTERNAL_SERVER_ERROR",
      errorDetails: ["An internal server error occurred"],
      data: null,
    });
  }
};

// Controller function for creating an order
const createOrderAsync = async (req, res) => {
  try {
    const orderRequest = req.body;
    const createdOrder = await Order.create(orderRequest);
    return res.json(createdOrder);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: "INTERNAL_SERVER_ERROR",
      errorDetails: ["An internal server error occurred"],
      data: null,
    });
  }
};

// Controller function for deleting an order
const deleteOrderByIdAsync = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const result = await Order.findByIdAndDelete(orderId);
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: "INTERNAL_SERVER_ERROR",
      errorDetails: ["An internal server error occurred"],
      data: null,
    });
  }
};

// Controller function for canceling an order
const cancelOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const result = await Order.findByIdAndUpdate(
      orderId,
      { status: "canceled" },
      { new: true }
    );
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: "INTERNAL_SERVER_ERROR",
      errorDetails: ["An internal server error occurred"],
      data: null,
    });
  }
};

// Controller function for searching orders
const searchOrderAsync = async (req, res) => {
  try {
    const searchOrderRequest = req.body;
    const searchResult = await Order.find(/* Your search criteria here */);
    return res.json(searchResult);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: "INTERNAL_SERVER_ERROR",
      errorDetails: ["An internal server error occurred"],
      data: null,
    });
  }
};

module.exports = {
  getOrderDetailAsync,
  updateOrderAsync,
  createOrderAsync,
  deleteOrderByIdAsync,
  cancelOrder,
  searchOrderAsync,
};
