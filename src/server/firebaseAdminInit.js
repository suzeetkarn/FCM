const admin = require('firebase-admin');
const serviceAccount = require('../fir-fcm-830e4-firebase-adminsdk-rw8t0-5336284430.json'); // Update with your actual path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
