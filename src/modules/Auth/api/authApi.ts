import API, { APIResponseSuccess } from "../../../common/api/API";

export interface PostLoginData {
	email: string;
	password: string;
}

export const postLoginApi = async (data: PostLoginData) => {
	return await API.post<APIResponseSuccess>("/auth/login", { ...data, role: "SUPER_ADMIN" });
};
