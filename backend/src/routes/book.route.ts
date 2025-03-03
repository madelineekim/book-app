import express from "express"
import { addReadBook, addLikedBook, moveBook, addRating, removeBook } from "../controllers/book.controller"

const router = express.Router()

router.post("/add-read-book", addReadBook) // add book to user's personal library

router.post("/add-liked-book", addLikedBook) // add book to user's liked books

router.post("/move-book", moveBook) // move to read from liked

router.post("/add-rating", addRating) // add a rating to a book

router.post("/remove-book", removeBook) // remove book from user's personal library

export default router;