import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./modules/Auth/routes";
import "./app.scss";
import { ThemeProvider, createTheme } from "@mui/material";

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

	const theme = createTheme({
		typography: {
			fontFamily: "Nunito Sans, sans-serif",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default App;
