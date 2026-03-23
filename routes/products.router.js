import { Router } from "express";

const router = Router();

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getProductsByOwner,
} from "../controllers/products.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

// CRUD: create, read, update, delete
router.post("/", authMiddleware, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

router.get("/my-products", authMiddleware, getProductsByOwner);

// Extra
router.get("/category/:id", getProductsByCategory);

export default router;
