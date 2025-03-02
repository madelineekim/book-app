import express from "express"

const router = express.Router()

router.post("/add-read-book", addReadBook) // add book to user's personal library

router.post("/add-liked-book", addLikedBook) // add book to user's liked books

router.post("/add-rating", addRating) // add a rating to a book

export default router;