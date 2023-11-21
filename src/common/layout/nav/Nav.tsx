import { FC } from "react";
import logo from "../../../assets/images/logos/full.png";
import { Link } from "react-router-dom";

const Nav: FC = () => {
	return (
		<nav className="flex">
			<Link to="/">
				<img src={logo} alt="logo" className="h-20 md:h-32 w-20 md:w-32" />
			</Link>
		</nav>
	);
};

export default Nav;
