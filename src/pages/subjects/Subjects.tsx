import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { FC } from "react";
import Button from "../../components/Button/Button";
import AddIcon from "@mui/icons-material/Add";

const subjectData = [
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush", "Aditya"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush", "Aditya"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush", "Aditya"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
	{ title: "Physics", code: 1234, semester: 3, teacher: ["Ayush"] },
];

const Subjects: FC = () => {
	return (
		<div>
			<div className="flex justify-between">
				<Typography>
					Total subjects: <span className="text-secondary">50</span>
				</Typography>
				<Button endIcon={<AddIcon />}>New</Button>
			</div>

			<TableContainer className="mt-6 max-h-[70vh]">
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell>Code</TableCell>
							<TableCell>Semester</TableCell>
							<TableCell>Teacher</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{subjectData.map((subject, i) => (
							<TableRow hover key={i} className="cursor-pointer">
								<TableCell>{subject.title}</TableCell>
								<TableCell>{subject.code}</TableCell>
								<TableCell>{subject.semester}</TableCell>
								<TableCell>{subject.teacher.join(", ")}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Subjects;
