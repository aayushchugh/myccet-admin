import { Divider, Flex, Layout, Menu } from "antd";
import { FC, useState } from "react";
import logo from "../../../assets/images/logos/icon.png";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { GoPerson } from "react-icons/go";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiBookOpenLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SideBar: FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const navigate = useNavigate();

	const sideBarMenuItems: MenuItemType[] = [
		{
			key: "students",
			label: "Students",
			icon: <GoPerson size={24} />,
			style: {
				display: "flex",
				alignItems: "center",
			},
			onClick() {
				navigate("/students");
			},
		},

		{
			key: "faculty",
			label: "Faculty",
			icon: <PiSuitcaseSimple size={24} />,
			style: { display: "flex", alignItems: "center" },
			onClick() {
				navigate("/faculties");
			},
		},

		{
			key: "departments",
			label: "Departments",
			icon: <FaRegBuilding size={24} />,
			style: { display: "flex", alignItems: "center" },
			onClick() {
				navigate("/departments");
			},
		},

		{
			key: "courses",
			label: "Courses",
			icon: <LuGraduationCap size={24} />,
			style: { display: "flex", alignItems: "center" },
			onClick() {
				navigate("/courses");
			},
		},

		{
			key: "subjects",
			label: "Subjects",
			icon: <RiBookOpenLine size={24} />,
			style: { display: "flex", alignItems: "center" },
			onClick() {
				navigate("/subjects");
			},
		},
	];

	return (
		// TODO: Adjust it to be responsive
		<Layout.Sider
			// collapsible
			collapsed={collapsed}
			onCollapse={value => setCollapsed(value)}
			theme="light"
			style={{
				overflow: "auto",
				height: "100vh",
				position: "fixed",
				left: 0,
				top: 0,
				bottom: 0,
			}}
		>
			<Flex align="center" justify="center" rootClassName="px-4">
				<img
					src={logo}
					alt="logo"
					className="h-auto w-full min-w-20 max-w-28"
				/>
			</Flex>
			<Divider />
			<Menu
				theme="light"
				items={sideBarMenuItems}
				defaultSelectedKeys={["students"]} // TODO: Adjust this to be dynamic and adjust initial route
			/>
		</Layout.Sider>
	);
};

export default SideBar;
