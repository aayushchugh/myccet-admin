import { Circle } from "@mui/icons-material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { FC } from "react";

const Button: FC<LoadingButtonProps> = ({ variant, type, loading, color, endIcon, ...props }) => {
	return (
		<LoadingButton
			startIcon={loading && <Circle />}
			endIcon={endIcon}
			loading={loading}
			loadingPosition={loading ? "start" : "center"}
			variant={variant || "contained"}
			type={type || "submit"}
			color={color || "primary"}
			{...props}
		/>
	);
};

export default Button;
