import { PermissionModal } from "../src/components/permission-modal";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return (
		<>
			<PermissionModal />
			<Component {...pageProps} />
		</>
	);
}
