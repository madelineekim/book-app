import prisma from "../lib/prisma.ts"
import { Request, Response } from "express";

export const addReadBook = async (req: Request, res: Response): Promise<void> => {
    const { title, authors, imageURL } = req.body;
  try {
    const newBook = await prisma.bookInstance.create({
        where: {
            title: title,
            authors: authors,
            imageURL: imageURL,
            liked: false,
            read: true,
            user: req.user // need to add middleware for jwt authentication
        }
    })
    res.status(200).json({ message: "New Read Book Logged"})
  } catch (error) {
    console.log("Error in addReadBook controller", error.message);
    res.status(500).json({ message: "Internal Server Error" }); 
  }
};

export const addLikedBook = async (req: Request, res: Response): Promise<void> => {
    const { title, authors, imageURL } = req.body;
  try {
    const newBook = await prisma.bookInstance.create({
        where: {
            title: title,
            authors: authors,
            imageURL: imageURL,
            liked: true,
            read: false,
            user: req.user // need to add middleware for jwt authentication
        }
    })
    res.status(200).json({ message: "New Liked Book Logged"})
  } catch (error) {
    console.log("Error in addLikedBook controller", error.message);
    res.status(500).json({ message: "Internal Server Error" }); 
  }
};

export const moveBook = async (req: Request, res: Response): Promise<void> => {
    const { title, authors, imageURL } = req.body;
    try {
        const updatedBook = await prisma.bookInstance.update({
            where: {
                title: title,
                authors: authors,
                imageURL: imageURL,
                user: req.user // need to add middleware for jwt authentication
            },
            data: { 
                liked: false, 
                read: true,
            }
        });
        res.status(200).json({ message: "Book Moved Successfully"})
    } catch (error) {
    console.log("Error in moveBook controller", error.message);
    res.status(500).json({ message: "Internal Server Error" }); 
    }
}

export const addRating = async (req: Request, res: Response): Promise<void> => {
    const { title, authors, imageURL, rating } = req.body;
    try {
        const updatedBook = await prisma.bookInstance.update({
            where: {
                title: title,
                authors: authors,
                imageURL: imageURL,
                user: req.user // need to add middleware for jwt authentication
            },
            data: { 
                rating: rating,
            }
          });
        res.status(200).json({ message: "Rating added"})
    } catch (error) {
    console.log("Error in addRating controller", error.message);
    res.status(500).json({ message: "Internal Server Error" }); 
    }   
}

export const removeBook = async (req: Request, res: Response): Promise<void> => {
    const { title, authors, imageURL} = req.body;
    try {
        const deletedBook = await prisma.bookInstance.delete({
            where: {
                title: title,
                authors: authors,
                imageURL: imageURL,
                user: req.user // need to add middleware for jwt authentication
            }
        })
        res.status(200).json({ message: "Book Removed"})
    } catch (error) {
        console.log("Error in removeBook controller", error.message);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
} 
