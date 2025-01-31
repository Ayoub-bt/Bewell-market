import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email phone"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Update order to en cours de traitement
// @route   GET /api/orders/:id/encourstraitement
// @access  Private/Admin
const updateOrderToEnCoursDeTraitement = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isTraitement = true;
    order.isPrepa = false;
    order.isDelivered = false;
    order.isPaid = false;

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Update order to en cours de préparation
// @route   GET /api/orders/:id/encoursprepa
// @access  Private/Admin
const updateOrderToEnCoursDePrepa = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isTraitement = true;
    order.isPrepa = true;
    order.isDelivered = false;
    order.isPaid = false;

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isTraitement = true;
    order.isPrepa = true;
    order.isDelivered = true;
    order.isPaid = false;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Update order to paid
// @route   GET /api/orders/:id/paid
// @access  Private/Admin
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isTraitement = true;
    order.isPrepa = true;
    order.isDelivered = true;
    order.isPaid = true;
    order.paidAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Update order to delivered by
// @route   GET /api/orders/:id/deliveredBy
// @access  Private/Admin
const updateDeliveredBy = asyncHandler(async (req, res) => {
  const { deliveredBy } = req.body;

  const order = await Order.findById(req.params.id);

  if (order) {
    order.deliveredBy = deliveredBy;

    const updatedOrder = await order.save();

    res.status(201).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Update order to canceled
// @route   GET /api/orders/:id/cancel
// @access  Private/Admin
const updateOrderToCanceled = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isTraitement = false;
    order.isPrepa = false;
    order.isDelivered = false;
    order.isPaid = false;
    order.isCancel = true;

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  res.json(orders);
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "id name phone");

  res.json(orders);
});

export {
  addOrderItems,
  getOrderById,
  updateOrderToEnCoursDeTraitement,
  updateOrderToEnCoursDePrepa,
  updateOrderToDelivered,
  updateOrderToCanceled,
  updateOrderToPaid,
  updateDeliveredBy,
  getMyOrders,
  getOrders,
};
