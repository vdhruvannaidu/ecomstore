import { Router } from "express";
import { errorHandler } from "../error-handler";
import { createProduct, deleteProduct, getProductById, listProduct, updateProduct } from "../controllers/product";
import adminMiddleware from "../middlewares/admin";
import authMiddleware from "../middlewares/auth";

const productsRoutes: Router = Router();

productsRoutes.post('/', [authMiddleware, adminMiddleware],errorHandler(createProduct));
productsRoutes.put('/:id', [authMiddleware, adminMiddleware],errorHandler(updateProduct));
productsRoutes.post('/:id', [authMiddleware, adminMiddleware],errorHandler(deleteProduct));
productsRoutes.get('/', [authMiddleware, adminMiddleware],errorHandler(listProduct));
productsRoutes.get('/:id', [authMiddleware, adminMiddleware],errorHandler(getProductById));

export default productsRoutes;  