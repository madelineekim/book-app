import prisma from "../lib/prisma.ts"
import { Request, Response } from "express";

export const getUserData = async (req: Request, res: Response): Promise<void> {
    try {
        const userData = await prisma.User.findOne({
            where: {
                user: req.user
            }
        })
        res.status(200).json(userData);
    } catch (error) {
        console.log("Error in getUserData controller", error.message);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
}

export const getPageData = async (req: Request, res: Response): Promise<void> {
    const { userId } = req.body;
    try {
        const pageData = await prisma.User.findOne({
            where: {
                userId: userId
            }
        })
        res.status(200).json(pageData);
    } catch (error) {
        console.log("Error in getUserData controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });  
    }
} 