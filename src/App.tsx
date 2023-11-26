import { FC, Suspense, lazy } from "react";
import "./app.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import LoadingIndicator from "./layout/loadingIndicator/LoadingIndicator";

const LoginPage = lazy(() => import("./pages/auth/login/Login"));
const SubjectsPage = lazy(() => import("./pages/subjects/Subjects"));

const App: FC = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#346CAC",
				light: "#5C89BC",
				dark: "#244B78",
				contrastText: "#FFFFFF",
			},
			secondary: {
				main: "#ba2121",
				light: "#C74D4D",
				dark: "#821717",
				contrastText: "#FFFFFF",
			},
		},
		typography: {
			fontFamily: "Nunito Sans, sans-serif",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<LoadingIndicator />}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route path="/login" element={<LoginPage />} />
							<Route path="/subjects" element={<SubjectsPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Suspense>
		</ThemeProvider>
	);
};

export default App;
