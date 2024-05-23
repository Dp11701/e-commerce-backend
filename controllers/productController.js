const Product = require("../models/productModels");
const express = require("express");

// @desc Get all products
// @route GET /api/products
// @access Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// @desc Get a single product by ID
// @route GET /api/products/:id
// @access Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @desc Create a new product
// @route POST /api/products
// @access Private (example: only authenticated users can create a product)
const createProduct = async (req, res) => {
  try {
    const {
      _id,
      name,
      price,
      stock_quantity,
      sold_quantity,
      category_id,
      cover,
      description,
    } = req.body;

    // Kiểm tra xem có sản phẩm nào có _id trùng không
    const existingProduct = await Product.findOne({ _id });
    if (existingProduct) {
      return res
        .status(409)
        .json({ message: "Product with the same ID already exists" });
    }

    // Tạo sản phẩm mới
    const product = new Product({
      _id, // Make sure _id is a number type and provided by the client
      name,
      price,
      stock_quantity,
      sold_quantity,
      category_id,
      cover,
      description,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @desc Update a product by ID
// @route PUT /api/products/:id
// @access Private (example: only authenticated users can update a product)
const updateProduct = async (req, res) => {
  try {
    const {
      _id,
      name,
      price,
      stock_quantity,
      sold_quantity,
      category_id,
      cover,
      description,
    } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    product._id = _id; // Make sure _id is a number type and provided by the client
    product.name = name;
    product.price = price;
    product.stock_quantity = stock_quantity;
    product.sold_quantity = sold_quantity;
    product.category_id = category_id;
    product.cover = cover;
    product.description = description;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// @desc Delete a product by ID
// @route DELETE /api/products/:id
// @access Private (example: only authenticated users can delete a product)
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    await product.remove();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// @desc Get search products
// @route GET /api/products/search
// @access Public

// Define the controller
const searchController = async (req, res) => {
  // Get the search term from the request
  const searchTerm = req.query.search;

  // Try to query the database for products that match the search term
  try {
    const products = await Product.find({
      name: {
        $regex: searchTerm,
        $options: "i",
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchController,
};
