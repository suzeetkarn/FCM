importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyB8Bz8sZPNVwENfSSxt0ik1n4ctF9aogqY",
  authDomain: "fir-fcm-830e4.firebaseapp.com",
  projectId: "fir-fcm-830e4",
  storageBucket: "fir-fcm-830e4.appspot.com",
  messagingSenderId: "368434415588",
  appId: "1:368434415588:web:deea23095a9d80be96e9f1",
  measurementId: "G-9533K2PLNB"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


const installEvent = () => {
  self.addEventListener('install', () => {
    console.log('service worker installed');
    self.clients.matchAll().then(function(clients) {
      clients.forEach(function(client) {
        setInterval(()=>{client.postMessage('installed');},3000)
      });
    })
  });
};
installEvent();

const activateEvent = () => {
  self.addEventListener('activate', () => {
    console.log('service worker activated');
    self.clients.matchAll().then(function(clients) {
      clients.forEach(function(client) {
        setInterval(()=>{client.postMessage('activated');},3000)
      });
    })
  });
};
activateEvent();