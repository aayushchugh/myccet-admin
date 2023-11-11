import { FC } from "react";
import loginImg from "../../../assets/images/background/login.jpg";
import { Button, TextField, Typography } from "@mui/material";

const LoginPage: FC = () => {
	return (
		<main className="flex items-center justify-center h-screen">
			<div className="flex items-center shadow-xl rounded-lg">
				<div className="w-1/2">
					<img src={loginImg} alt="side" className="w-[80%] h-auto" />
				</div>
				<form className="w-[45%] flex-col">
					<Typography variant="h1" className="!text-2xl !mb-8">
						Welcome Back!
					</Typography>

					<TextField
						label="Email"
						type="email"
						placeholder="email@example.com"
						className="!mb-8"
						required
						fullWidth
					/>

					<TextField
						label="Password"
						type="password"
						placeholder="strong password"
						className="!mb-5"
						required
						fullWidth
					/>

					<Typography
						variant="subtitle2"
						className="underline !mb-8 hover:text-primary cursor-pointer transition-all delay-[0.5ms]"
					>
						Forgot Password
					</Typography>

					<Button type="submit" variant="contained">
						Login
					</Button>
				</form>
			</div>
		</main>
	);
};

export default LoginPage;
