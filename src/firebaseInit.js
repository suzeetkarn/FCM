import firebaseConfig from './config/firebaseConfig';
import { initializeApp, getApps } from "firebase/app";
import {
	Messaging,
	getMessaging,
	getToken,
	isSupported,
} from "firebase/messaging";
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

export const app = !getApps()?.length
	? initializeApp(firebaseConfig)
	: getApps()[0];

export default app;

export const getMessagingObj = async ()=> {
	const supported = await isSupported();
	console.log("is notification supported", supported);
	if (!supported || typeof window === "undefined") return null;
	return getMessaging(app);
};

export const fetchToken = async () => {
	try {
		const messaging = await getMessagingObj();
		if (messaging) {
			const token = await getToken(messaging, {
				vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY ?? "",
			});
			return token;
		}
		return null;
	} catch (err) {
		console.error(err);
		return null;
	}
};