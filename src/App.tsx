import { FC, Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateFacultiesPage from "./modules/faculty/pages/createFacultiesPage/CreateFacultiesPage";

const LoginPage = lazy(() => import("./modules/auth/pages/login/LoginPage"));
const ViewAllFacultiesPage = lazy(
	() =>
		import("./modules/faculty/pages/viewAllFacultiesPage/ViewAllFacultiesPage")
);

const App: FC = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<h1>Loading</h1>}>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<Layout />}>
						<Route path="/faculties" element={<ViewAllFacultiesPage />} />
						<Route path="/faculties/new" element={<CreateFacultiesPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
