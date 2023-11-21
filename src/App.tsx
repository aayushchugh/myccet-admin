import { FC, Suspense, lazy } from "react";
import "./app.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./common/layout";
import LoadingIndicator from "./common/layout/loadingIndicator";

const LoginPage = lazy(() => import("./modules/Auth/pages/login"));

const App: FC = () => {
	const theme = createTheme({
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
						</Route>
					</Routes>
				</BrowserRouter>
			</Suspense>
		</ThemeProvider>
	);
};

export default App;
