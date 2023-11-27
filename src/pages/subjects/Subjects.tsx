import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import { FC, useState } from "react";
import Button from "../../components/Button/Button";
import AddIcon from "@mui/icons-material/Add";

const subjectData = [
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush", "Aditya"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush", "Aditya"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush", "Aditya"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Theory", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, type: "Practical", lecturer: ["Ayush"] },
];

const Subjects: FC = () => {
	const [isAccordianExpanded, setIsAccordianExpanded] = useState(false);

	const handleAccordianChange = () => {
		setIsAccordianExpanded((prevState) => !prevState);
	};

	return (
		<div>
			<div className="flex justify-between">
				<Typography>
					Total subjects: <span className="text-secondary">50</span>
				</Typography>
				<Button
					endIcon={!isAccordianExpanded && <AddIcon />}
					onClick={handleAccordianChange}
				>
					{isAccordianExpanded ? "Cancel" : "New"}
				</Button>
			</div>

			<Accordion
				elevation={0}
				expanded={isAccordianExpanded}
				className="!bg-slate-100 !static"
			>
				<AccordionSummary className="!hidden" />
				<AccordionDetails className="!m-0 !outline-none !border-none">
					<form>
						<FormControl fullWidth required margin="normal">
							<TextField label="Title" placeholder="Maths" required />
						</FormControl>

						<FormControl fullWidth required margin="normal">
							<TextField type="number" label="Code" placeholder="1234" required />
						</FormControl>

						<FormControl fullWidth margin="normal" required>
							<InputLabel>Type</InputLabel>
							<Select label="Type" required>
								<MenuItem value={0}>Theory</MenuItem>
								<MenuItem value={1}>Practical</MenuItem>
							</Select>
						</FormControl>

						<FormControl fullWidth margin="normal" required>
							<InputLabel>Lecturer</InputLabel>
							<Select label="Lecturer" required>
								<MenuItem value="1">Ayush</MenuItem>
								<MenuItem value="2">Aditya</MenuItem>
								<MenuItem value="3">Kirti</MenuItem>
							</Select>
						</FormControl>

						<Button endIcon={<AddIcon />}>Create</Button>
					</form>
				</AccordionDetails>
			</Accordion>

			<TableContainer className="mt-6 max-h-[70vh]">
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell>Code</TableCell>
							<TableCell>Semester</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>lecturer</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{subjectData.map((subject, i) => (
							<TableRow hover key={i} className="cursor-pointer">
								<TableCell>{subject.title}</TableCell>
								<TableCell>{subject.code}</TableCell>
								<TableCell>{subject.semester}</TableCell>
								<TableCell>{subject.type}</TableCell>
								<TableCell>{subject.lecturer.join(", ")}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Subjects;
