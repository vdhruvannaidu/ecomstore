import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { prismaClient } from "..";
import { productSchema } from "../schemas/product";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";


export const createProduct = async(req:Request, res: Response) => {
    console.log(req.body)
    const validatedData = productSchema.parse(req.body);

    // Log productData for debugging
    console.log('Product Data for Prisma:', validatedData);

    // productSchema.parse(req.body)
    const product = await prismaClient.product.create({
        data:{
            ...req.body,
            tags: req.body.tags.join(','),
        }
        
    })
    
    res.json(product);
}
export const updateProduct = async(req:Request, res: Response) => {
    try {
        const product = req.body;
        if(product.tags){
            product.tag = product.tag.join(',');
        }
        const updateProduct = await prismaClient.product.update({
            where: {
                id: +req.params.id,
            },
            data:product
        })
        res.json(updateProduct);
    } catch (error) {
        throw new NotFoundException('Product Not Found', ErrorCode.PRODUCT_NOT_FOUND);
    }
}
export const deleteProduct = async(req:Request, res: Response) => {
}
export const listProduct = async(req:Request, res: Response) => {
}
export const getProductById = async(req:Request, res: Response) => {
}