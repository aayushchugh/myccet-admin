import { FC, ReactNode } from "react";
import MultiStepForm from "../../../../components/multiStepForm/MultiStepForm";
import CreateFacultiesBasicDetailsForm from "./components/createFacultiesBasicDetailsForm/CreateFacultiesBasicDetailsForm";
import CreateFacultiesFacultyDetailsForm from "./components/createFacultiesFacultyDetailsForm/CreateFacultiesFacultyDetailsForm";

const CreateFacultiesPage: FC = () => {
	const formSteps: ReactNode[] = [
		<CreateFacultiesBasicDetailsForm />,
		<CreateFacultiesFacultyDetailsForm />,
	];

	return (
		<>
			<MultiStepForm
				steps={[{ title: "Basic Details" }, { title: "Faculty Details" }]}
				formSteps={formSteps}
			/>
		</>
	);
};

export default CreateFacultiesPage;
