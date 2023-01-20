import { IError } from '../interfaces/error.interfaces';
import { IUsersResponse } from '../interfaces/user.interfaces';
import { getUsers } from '../services/user.service';

export const getUsersController = async () : Promise<IUsersResponse | IError> => await getUsers();
