import { api } from "./api"

interface LoginPayload {
  username: string;
  password: string;
}

export const loginUser = async (payload: LoginPayload) => {
    const res = await api.post('/University/Users/Login', payload);

    return res.data;
}
