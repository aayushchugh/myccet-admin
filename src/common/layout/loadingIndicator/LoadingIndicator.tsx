import { FC } from "react";
import logo from "../../../assets/images/logos/icon.png";
import styles from "./style.module.scss";
import { Typography } from "@mui/material";

const LoadingIndicator: FC = () => {
	return (
		<div className="bg-white flex flex-col h-screen items-center justify-center">
			<img
				src={logo}
				alt="loading indicator"
				className={`max-h-40 max-w-40 ${styles.loading}`}
			/>
			<Typography variant="h6">Loading...</Typography>
		</div>
	);
};

export default LoadingIndicator;
