import { ChangeEvent, FC, FormEvent, useState } from "react";
import loginImg from "../../../assets/images/background/login.jpg";
import { FormControl, TextField, Typography } from "@mui/material";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logos/full.png";
import { PostLoginData, postLoginApi } from "../../../api/API";

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
		<>
			<nav className="flex">
				<Link to="/">
					<img src={logo} alt="logo" className="h-20 md:h-32 w-20 md:w-32" />
				</Link>
			</nav>
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
						<Typography
							variant="h1"
							className="!text-xl md:!text-2xl !mb-8 text-center"
						>
							Welcome Back!
						</Typography>

						<FormControl fullWidth required>
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
						</FormControl>

						<FormControl fullWidth required>
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
						</FormControl>

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
		</>
	);
};

export default LoginPage;
