import React, { useEffect, useState } from "react";
import { useFCM } from "./useFcm";

export const PermissionModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { loadToken } = useFCM();

	useEffect(() => {
		if ("Notification" in window && Notification.permission !== "granted")
			setIsOpen(true);
	}, []);

	const handleSubmit = () => {
		loadToken();
		setIsOpen(false);
	};

	return (
		<div open={isOpen} style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
			
		</div>
	);
};