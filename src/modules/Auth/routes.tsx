import { RouteObject } from "react-router-dom";
import LoginPage from "./pages/loginPage";

const AuthRoutes: RouteObject[] = [
	{
		path: "login",
		element: <LoginPage />,
	},
];

export default AuthRoutes;
