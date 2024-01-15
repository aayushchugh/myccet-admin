declare global {
	interface IUser {
		_id: string;
		name: string;
		email: string;
		role: string; // TODO: adjust roles based on backend
	}

	interface IFaculty extends IUser {
		department: string;
	}
}

export {};
