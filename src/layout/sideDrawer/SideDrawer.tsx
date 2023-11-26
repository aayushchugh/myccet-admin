import { Divider, Drawer, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/icon.png";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ApartmentIcon from "@mui/icons-material/Apartment";

const SideDrawer: FC = () => {
	return (
		<Drawer variant="permanent">
			<div className="bg-primary h-full px-3">
				<List>
					<ListItem>
						<Link to="/" className="flex items-center">
							<img src={logo} alt="logo" className="h-16 w-16" />
							<Typography variant="subtitle1" className="text-white">
								MyCCET
							</Typography>
						</Link>
					</ListItem>
				</List>

				<Divider className="bg-white/70" />

				<List>
					<ListItem className="items-center hover:bg-white/20 hover:rounded transition-all duration-75 cursor-pointer">
						<PersonOutlinedIcon className="text-white" />
						<Typography className="!ml-2 text-white">Students</Typography>
					</ListItem>
					<ListItem className="items-center hover:bg-white/20 hover:rounded transition-all duration-75 cursor-pointer">
						<WorkOutlineIcon className="text-white" />
						<Typography className="!ml-2 text-white">Faculty</Typography>
					</ListItem>
					<ListItem className="items-center hover:bg-white/20 hover:rounded transition-all duration-75 cursor-pointer">
						<SchoolOutlinedIcon className="text-white" />
						<Typography className="!ml-2 text-white">Courses</Typography>
					</ListItem>
					<ListItem className="items-center hover:bg-white/20 hover:rounded transition-all duration-75 cursor-pointer">
						<ApartmentIcon className="text-white" />
						<Typography className="!ml-2 text-white">Departments</Typography>
					</ListItem>
					<ListItem className="items-center hover:bg-white/20 hover:rounded transition-all duration-75 cursor-pointer">
						<LibraryBooksOutlinedIcon className="text-white" />
						<Typography className="!ml-2 text-white">Subjects</Typography>
					</ListItem>
				</List>
			</div>
		</Drawer>
	);
};

export default SideDrawer;
