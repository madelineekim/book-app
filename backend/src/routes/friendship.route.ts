import express from "express"

const router = express.Router()

router.get("/get-friendship-status", getFriendshipStatus) // get data to show status of friendship (requested, not requested, friends)

router.post("/send-friend-request", sendFriendRequest) // send friend request

router.post("/friend-request-state-change", friendRequestStateChange) // action on a friend request sent to that user

export default router;