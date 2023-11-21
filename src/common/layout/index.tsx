import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import { FC } from "react";

const Layout: FC = () => {
	return (
		<div>
			<Nav />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
