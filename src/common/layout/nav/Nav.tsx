import { FC } from "react";
import logo from "../../../assets/images/logos/full.png";
import { Link } from "react-router-dom";

const Nav: FC = () => {
	return (
		<nav className="flex">
			<Link to="/">
				<img src={logo} alt="logo" className="max-h-32 max-w-32" />
			</Link>
		</nav>
	);
};

export default Nav;
