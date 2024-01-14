import { Divider, Flex, Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { FC, useState } from "react";
import logo from "../../../../assets/images/logos/icon.png";
import { GoPerson } from "react-icons/go";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiBookOpenLine } from "react-icons/ri";

const menuItems: MenuItemType[] = [
	{
		key: "students",
		label: "Students",
		icon: <GoPerson size={24} />,
		style: {
			display: "flex",
			alignItems: "center",
		},
	},

	{
		key: "faculty",
		label: "Faculty",
		icon: <PiSuitcaseSimple size={24} />,
		style: { display: "flex", alignItems: "center" },
	},

	{
		key: "departments",
		label: "Departments",
		icon: <FaRegBuilding size={24} />,
		style: { display: "flex", alignItems: "center" },
	},

	{
		key: "courses",
		label: "Courses",
		icon: <LuGraduationCap size={24} />,
		style: { display: "flex", alignItems: "center" },
	},

	{
		key: "subjects",
		label: "Subjects",
		icon: <RiBookOpenLine size={24} />,
		style: { display: "flex", alignItems: "center" },
	},
];

const SideBar: FC = () => {
	const [collapsed, setCollapsed] = useState(false);

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
				items={menuItems}
				defaultSelectedKeys={["students"]} // TODO: Adjust this to be dynamic and adjust initial route
			/>
		</Layout.Sider>
	);
};

export default SideBar;
