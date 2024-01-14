import { Button, Form, Input, Layout, Typography } from "antd";
import { FC } from "react";
import bgImg from "../../../../assets/images/background/login.svg";

const LoginPage: FC = () => {
	return (
		<Layout className="min-h-screen">
			<Layout.Content className="w-full flex items-center justify-center">
				<div className="bg-white rounded flex items-center justify-evenly py-40 px-10">
					<div className="w-1/2">
						<img
							src={bgImg}
							alt="side illustration"
							className="h-full w-[80%]"
						/>
					</div>
					<Form className="w-1/2 ml-5" layout="vertical" size="large">
						<Typography.Title level={2}>Welcome Back</Typography.Title>
						<Form.Item
							label="Email"
							required
							name="email"
							rules={[
								{ required: true, message: "Please enter your Email" },
								{ type: "email", message: "Please enter a valid email" },
							]}
						>
							<Input placeholder="Email" required />
						</Form.Item>
						<Form.Item
							label="Password"
							name="password"
							rules={[{ required: true, message: "Email is required" }]}
							required
						>
							<Input.Password placeholder="Password" required />
						</Form.Item>
						<Button type="primary">Login</Button>
					</Form>
				</div>
			</Layout.Content>
		</Layout>
	);
};

export default LoginPage;
