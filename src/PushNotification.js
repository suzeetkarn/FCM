import { useEffect } from 'react';
import messaging from './firebaseInit';
import { onMessage } from "firebase/messaging";

const PushNotification = () => {
  useEffect(() => {
   // Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});
  }, []);

  return <div>Requesting permission for notifications...</div>;
};

export default PushNotification;
