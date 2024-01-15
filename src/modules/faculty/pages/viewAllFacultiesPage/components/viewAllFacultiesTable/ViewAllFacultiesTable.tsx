import { Table, TableProps } from "antd";
import { FC } from "react";
import dummyFaculties from "./dummyFaculties";

const ViewAllFacultiesTable: FC = () => {
	const columns: TableProps<IFaculty>["columns"] = [
		{
			title: "Name",
			dataIndex: "name",
		},
		{
			title: "Department",
			dataIndex: "department",
		},
	];

	return <Table columns={columns} dataSource={dummyFaculties} />;
};

export default ViewAllFacultiesTable;
