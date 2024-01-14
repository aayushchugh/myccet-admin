import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { GoPerson } from "react-icons/go";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiBookOpenLine } from "react-icons/ri";

const sideBarMenuItems: MenuItemType[] = [
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

export default sideBarMenuItems;
