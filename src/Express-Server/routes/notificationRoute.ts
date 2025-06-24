import express from "express";
import pushNotification from "../controllers/pushNotification";

const router = express.Router();

router.post('/send-notification', pushNotification.sendPushNotification);
router.post('/register-fcm-token', pushNotification.registerFcmToken);

export default router;