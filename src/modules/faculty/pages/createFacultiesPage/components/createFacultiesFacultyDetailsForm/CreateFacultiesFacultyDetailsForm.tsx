import { Form, Select } from "antd";
import { FC } from "react";

const CreateFacultiesFacultyDetailsForm: FC = () => {
	return (
		<>
			<Form.Item label="Department" name="department">
				<Select placeholder="Department">
					<Select.Option value="CSE">CSE</Select.Option>
					<Select.Option value="ECE">ECE</Select.Option>
					<Select.Option value="Mechanical">Mechanical</Select.Option>
				</Select>
			</Form.Item>
			{/* TODO: add more details */}
		</>
	);
};

export default CreateFacultiesFacultyDetailsForm;
