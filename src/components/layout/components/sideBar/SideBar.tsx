import { Divider, Flex, Layout, Menu } from "antd";
import { FC, useState } from "react";
import logo from "../../../../assets/images/logos/icon.png";
import sideBarMenuItems from "./sideBarMenuItems";

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
				items={sideBarMenuItems}
				defaultSelectedKeys={["students"]} // TODO: Adjust this to be dynamic and adjust initial route
			/>
		</Layout.Sider>
	);
};

export default SideBar;
