import { Outlet, useLocation } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import SideDrawer from "./sideDrawer/SideDrawer";
import { CssBaseline } from "@mui/material";

const Layout: FC = () => {
	const { pathname } = useLocation();
	const [isDrawerVisible, setIsDrawerVisible] = useState(true);

	useEffect(() => {
		if (pathname === "/login") {
			setIsDrawerVisible(false);
		}
	}, [pathname]);

	return (
		<>
			<CssBaseline />

			<div className="flex">
				{isDrawerVisible && <SideDrawer />}
				<div className="bg-slate-100 min-h-screen flex-1 px-8 pt-4 overflow-y-auto">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Layout;
