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

const columns = [
	{ name: "title", label: "title" },
	{ name: "code", label: "code" },
];

const subjectData = [
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
	{ title: "Physics", code: 1234 },
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
						</TableRow>
					</TableHead>
					<TableBody>
						{subjectData.map((subject, i) => (
							<TableRow hover key={i}>
								<TableCell>{subject.title}</TableCell>
								<TableCell>{subject.code}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Subjects;
