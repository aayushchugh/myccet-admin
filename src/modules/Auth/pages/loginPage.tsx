import { ChangeEvent, FC, FormEvent, useState } from "react";
import loginImg from "../../../assets/images/background/login.jpg";
import { TextField, Typography } from "@mui/material";
import Button from "../../../common/components/Button";
import { PostLoginData, postLoginApi } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState<PostLoginData>({
		email: "",
		password: "",
	});
	const [isLoginLoading, setIsLoginLoading] = useState(false);

	const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoginLoading(true);
		try {
			await postLoginApi(formData);
			navigate("/");
		} catch (err) {
			// TODO: handle error
		} finally {
			setIsLoginLoading(false);
		}
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<main className="flex items-center justify-center h-screen">
			<div className="flex items-center shadow-xl rounded-lg">
				<div className="w-1/2">
					<img src={loginImg} alt="side" className="w-[80%] h-auto" />
				</div>
				<form className="w-[45%] flex-col" onSubmit={onSubmitHandler}>
					<Typography variant="h1" className="!text-2xl !mb-8">
						Welcome Back!
					</Typography>

					<TextField
						label="Email"
						type="email"
						name="email"
						placeholder="email@example.com"
						className="!mb-8"
						onChange={onChangeHandler}
						required
						fullWidth
					/>

					<TextField
						label="Password"
						type="password"
						name="password"
						placeholder="strong password"
						className="!mb-5"
						onChange={onChangeHandler}
						required
						fullWidth
					/>

					<Typography
						variant="subtitle2"
						className="underline !mb-8 hover:text-primary cursor-pointer transition-all delay-[0.5ms]"
					>
						Forgot Password
					</Typography>

					<Button loading={isLoginLoading}>Login</Button>
				</form>
			</div>
		</main>
	);
};

export default LoginPage;
