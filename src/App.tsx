import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./module/Auth/routes";

const App: FC = () => {
	const router = createBrowserRouter([
		//TODO: redirect to login if not authenticated
		{
			path: "/",
			element: <div>Home</div>,
		},
		{
			path: "/auth",
			children: AuthRoutes,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
