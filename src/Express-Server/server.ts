import { app } from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import path from 'path'
import serviceAccountPath from './config/firebase-service-account-key.json'

dotenv.config()

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || '';

interface FirebaseServiceAccount {
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_x509_cert_url: string;
    universe_domain: string;
}

try {
  // Assert the type of the imported serviceAccount

    const firebaseAdminServiceAccount: admin.ServiceAccount = {
    projectId: serviceAccountPath.project_id,
    clientEmail: serviceAccountPath.client_email,
    privateKey: serviceAccountPath.private_key,
    // Note: private_key_id is not strictly required by admin.ServiceAccount if you provide privateKey
  };

  admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminServiceAccount),
    // projectId: typedServiceAccount.project_id, // Often inferred, but can be explicit
  });
  console.log('Firebase Admin SDK initialized successfully.');
} catch (error) {
  console.error('Failed to initialize Firebase Admin SDK. Check service account file content and imports.', error);
  process.exit(1);
}

mongoose.connect(MONGO_URI).then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log('Listening on port no 8000');

    })
}).catch((err) => {
    console.log('MongoDB connection failed', err);
})