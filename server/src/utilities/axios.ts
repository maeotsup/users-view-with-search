import axios, { AxiosError, AxiosResponse } from 'axios';

export const isAxiosError = <T>(error: unknown): error is AxiosError<T> => (
  axios.isAxiosError(error)
);

export const axiosGet = async <T>(url: string): Promise<AxiosResponse<T> | AxiosError<T> | unknown> => {
  try {
    return await axios.get<T>(url);
  } catch (error: unknown) {
    if (isAxiosError<T>(error)) {
      return { error: error.message };
    }
    return { error: 'An unknown error has occured' };
  }
};
