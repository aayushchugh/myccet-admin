import { FC } from "react";
import { Layout as AntLayout } from "antd";
import SideBar from "./components/sideBar/SideBar";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
	return (
		<AntLayout rootClassName="min-h-screen" hasSider>
			<SideBar />
			<AntLayout>
				<AntLayout.Content style={{ margin: "0 16px" }}>
					<Outlet />
				</AntLayout.Content>
			</AntLayout>
		</AntLayout>
	);
};

export default Layout;
