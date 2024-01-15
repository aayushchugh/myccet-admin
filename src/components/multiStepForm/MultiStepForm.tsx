import { Button, Flex, Form, StepProps, Steps } from "antd";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";

interface IMultiStepFormProps {
	steps: StepProps[];
	formSteps: React.ReactNode[];
}

const MultiStepForm: FC<IMultiStepFormProps> = ({ steps, formSteps }) => {
	// const [currentStep, setCurrentStep] = useState(0);
	const [searchParams, setSearchParams] = useSearchParams();

	const currentStep = searchParams.get("s") ? +searchParams.get("s")! : 0;

	const nextStepHandler = () => {
		if (currentStep === steps.length - 1) return;
		setSearchParams({ s: String(currentStep + 1) });
	};

	const previousStepHandler = () => {
		if (currentStep === 0) return;
		setSearchParams({ s: String(currentStep - 1) });
	};

	return (
		<>
			<Flex className="px-5 min-h-full" justify="center">
				<Steps
					direction="vertical"
					current={currentStep}
					onChange={step => setSearchParams({ s: String(step) })}
					items={steps}
					className="w-[30%]"
				/>
				<Form layout="vertical" className="w-1/2" size="large">
					{formSteps[currentStep]}

					<Flex justify={currentStep === 0 ? "end" : "space-between"}>
						{currentStep > 0 && (
							<Button type="primary" onClick={previousStepHandler}>
								&larr; Previous
							</Button>
						)}
						{currentStep < steps.length - 1 && (
							<Button type="primary" onClick={nextStepHandler}>
								Next &rarr;
							</Button>
						)}
						{currentStep === steps.length - 1 && (
							<Button type="primary">Submit</Button>
						)}
					</Flex>
				</Form>
			</Flex>
		</>
	);
};

export default MultiStepForm;
