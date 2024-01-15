import { Flex, Form, Input } from "antd";
import { FC } from "react";

const CreateFacultiesBasicDetailsForm: FC = () => {
	return (
		<>
			<Flex justify="space-between">
				<Form.Item
					label="First Name:"
					name="firstName"
					rules={[{ required: true, message: "First Name is required" }]}
				>
					<Input placeholder="First Name" required />
				</Form.Item>

				<Form.Item label="Middle Name:" name="middleName" className="ml-3">
					<Input placeholder="Middle Name" required />
				</Form.Item>

				<Form.Item
					label="Last Name:"
					name="lastName"
					className="ml-3"
					rules={[{ required: true, message: "Last Name is required" }]}
				>
					<Input placeholder="Last Name" required />
				</Form.Item>
			</Flex>

			<Form.Item
				label="Email:"
				name="email"
				rules={[
					{ required: true, message: "Email is required" },
					{ type: "email", message: "Please enter a valid email" },
				]}
			>
				<Input placeholder="Email" required />
			</Form.Item>

			<Form.Item
				label="Phone:"
				name="phone"
				rules={[
					{ required: true, message: "Phone is required" },
					{
						pattern: /^(\+\d{1,3})?\s?(\d{10})$/,
						message: "Please enter a valid phone number",
					},
				]}
			>
				<Input placeholder="Phone" required className="w-full" />
			</Form.Item>
			{/* TODO: add more details */}
		</>
	);
};

export default CreateFacultiesBasicDetailsForm;
