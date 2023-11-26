import axios from "axios";

const API = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

interface APIResponseSuccessBase {
	success: boolean;
	statusCode: number;
}

interface Data<T = unknown> {
	message: string;
	record?: T;
	records?: T[];
}

export interface APIResponseSuccess<T = unknown> extends APIResponseSuccessBase {
	data: Data<T>;
}

interface PaginationData<T = unknown> extends Data<T> {
	count?: number;
	limit?: number;
	page?: number;
}

export interface APIResponseSuccessWithPagination<T = unknown> extends APIResponseSuccessBase {
	data: PaginationData<T>;
}

export interface APIResponseError {
	success: boolean;
	statusCode: number;
	error: {
		message: string;
	};
}

export interface PostLoginData {
	email: string;
	password: string;
}

export const postLoginApi = async (data: PostLoginData) => {
	return await API.post<APIResponseSuccess>("/auth/login", { ...data, role: "SUPER_ADMIN" });
};

// TODO: Add interceptors

export default API;
