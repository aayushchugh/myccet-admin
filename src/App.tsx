import { FC, Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("./modules/auth/pages/login/LoginPage"));

const App: FC = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<h1>Loading</h1>}>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<Layout />}></Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
