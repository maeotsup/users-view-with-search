import { AxiosResponse } from 'axios';

import { axiosGet } from '../utilities/axios';
import { IError } from '../interfaces/error.interfaces';
import { IUsersResponse } from '../interfaces/user';

export const getUsers = async (): Promise<IUsersResponse | IError> => {
  try {
    const url = `${process.env.TYPICODE_URL}/users`;
    return await axiosGet<AxiosResponse<IUsersResponse>>(url) as IUsersResponse;
  } catch (error) {
    return error as IError;
  }
};
