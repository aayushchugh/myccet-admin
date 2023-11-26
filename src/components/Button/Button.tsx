import { Circle } from "@mui/icons-material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { FC } from "react";

const Button: FC<LoadingButtonProps> = ({ variant, type, loading, ...props }) => {
	return (
		<LoadingButton
			startIcon={loading && <Circle />}
			loading={loading}
			loadingPosition={loading ? "start" : "center"}
			variant={variant || "contained"}
			type={type || "submit"}
			{...props}
		/>
	);
};

export default Button;
