import { Outlet, useLocation } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import SideDrawer from "./sideDrawer/SideDrawer";

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
			<main>
				{isDrawerVisible && <SideDrawer />}
				<main className="bg-slate-100 min-h-screen">
					<Outlet />
				</main>
			</main>
		</>
	);
};

export default Layout;
