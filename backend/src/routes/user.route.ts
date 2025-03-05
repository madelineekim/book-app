import express from "express"
import { getUserData, getPageData } from "../controllers/user.controller.ts"

const router = express.Router()

router.get("/get-user-data", getUserData) // get data for personal library

router.get("/get-page-data", getPageData) // get data to populate someone else's page

export default router;