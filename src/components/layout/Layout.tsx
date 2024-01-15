import { FC } from "react";
import { Layout as AntLayout, Flex, Typography } from "antd";
import SideBar from "./components/sideBar/SideBar";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
	return (
		<AntLayout rootClassName="min-h-screen" hasSider>
			<SideBar />
			<AntLayout>
				<AntLayout.Header className="bg-white flex items-center justify-end">
					<Flex justify="end" align="center">
						{/* TODO: get name from API */}
						<Typography.Title level={3} className="m-0 !mb-0">
							Hey Ayush!
						</Typography.Title>
					</Flex>
				</AntLayout.Header>
				<AntLayout.Content style={{ margin: "0 16px" }}>
					<Outlet />
				</AntLayout.Content>
			</AntLayout>
		</AntLayout>
	);
};

export default Layout;
