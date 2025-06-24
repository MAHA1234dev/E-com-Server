import { Request, Response } from "express";
import admin from 'firebase-admin';

let fcmToken: string[] = [];
const registerFcmToken = (req: Request, res: Response) => {
    console.log(req, "server token");
    const { token } = req?.body;
    if (token && !fcmToken.includes(token)) {
        fcmToken.push(token);
        console.log("FCM token registered");
        res.status(200).json({ message: "Token Registered successfully" })
    } else {
        res.status(400).json({ message: "Invalid or duplicate token" })
    }
}

const sendPushNotification = async (req: Request, res: Response) => {
    const { title, body, imageUrl, data } = req.body;
    if (!fcmToken.length) {
        return res.status(400).send({ message: 'No FCM tokens registered yet.' });
    }
    // Construct the message payload
    const message = {
        notification: {
            title: title || 'Default Title',
            body: body || 'This is a default notification body.',
            ...(imageUrl && { imageUrl: imageUrl }), // Add imageUrl if provided
        },
        // Use the 'data' field to send custom key-value pairs to Notifee.
        // All values in 'data' must be strings.
        data: {
            // Notifee expects a stringified JSON object for its specific options
            notifee: JSON.stringify({
                title: title || 'Default Title',
                body: body || 'This is a default notification body.',
                android: {
                    channelId: 'default', // Make sure this matches the channel ID you created in Notifee
                    pressAction: {
                        id: 'default',
                        launchActivity: 'default', // Or a specific activity for Android
                    },
                },
                ios: {
                    // iOS specific Notifee options if needed
                },
                // Add any other custom data you want to send to your app
                customKey: 'customValue',
                ...(data && data), // Merge any additional custom data from the request
            }),
            // You can also send other plain data fields directly
            type: 'general',
            timestamp: Date.now().toString(),
        },
        // Target specific tokens. For a real app, you'd target specific user tokens from your database.
        tokens: fcmToken,
    };
    try {
        const response = await admin.messaging().sendEachForMulticast(message);
        console.log('Successfully sent message:', response);
        res.status(200).send({
            message: 'Notifications sent successfully',
            successCount: response.successCount,
            failureCount: response.failureCount,
        });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send({ message: 'Error sending notifications' });
    }
}

export default { sendPushNotification, registerFcmToken } 