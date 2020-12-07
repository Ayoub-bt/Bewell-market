import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToEnCoursDeTraitement,
  updateOrderToEnCoursDePrepa,
  updateOrderToDelivered,
  updateOrderToCanceled,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateDeliveredBy,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router
  .route("/:id/encourstraitement")
  .put(protect, admin, updateOrderToEnCoursDeTraitement);
router
  .route("/:id/encoursprepa")
  .put(protect, admin, updateOrderToEnCoursDePrepa);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);
router.route("/:id/cancel").put(protect, admin, updateOrderToCanceled);
router.route("/:id/paid").put(protect, admin, updateOrderToPaid);
router.route("/:id/deliveredBy").put(protect, admin, updateDeliveredBy);

export default router;
