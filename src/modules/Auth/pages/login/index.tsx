import { ChangeEvent, FC, FormEvent, useState } from "react";
import loginImg from "../../../../assets/images/background/login.jpg";
import { TextField, Typography } from "@mui/material";
import Button from "../../../../common/components/Button";
import { PostLoginData, postLoginApi } from "../../api/authApi";
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
		<div className="flex items-center justify-center">
			<div className="flex flex-col md:flex-row items-center justify-center rounded-lg md:w-[80%] md:shadow-xl">
				<div className="w-full md:w-1/2">
					<img
						src={loginImg}
						alt="side"
						className="hidden md:block mb-8 md:mb-0 md:w-[80%] h-[40vh] md:h-[60vh] lg:h-[70vh]"
					/>
				</div>
				<form
					className="md:w-1/2 flex-col px-10 items-center justify-center"
					onSubmit={onSubmitHandler}
				>
					<Typography variant="h1" className="!text-xl md:!text-2xl !mb-8 text-center">
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

					<Button loading={isLoginLoading} className="!mb-8 w-full">
						Login
					</Button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
