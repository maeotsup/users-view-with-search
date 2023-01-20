export interface IUser {
  id: number;
  email: string;
  name: string;
  username: string;
  website: string;
}

export interface IUsersResponse {
  data: IUser[];
}