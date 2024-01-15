import { FC } from "react";
import ViewAllFacultiesTable from "./components/viewAllFacultiesTable/ViewAllFacultiesTable";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";

const ViewAllFacultiesPage: FC = () => {
	return (
		<>
			<Flex justify="end" className="mb-4">
				<Link to="/faculties/new">
					<Button type="primary">New +</Button>
				</Link>
			</Flex>
			<ViewAllFacultiesTable />
		</>
	);
};

export default ViewAllFacultiesPage;
