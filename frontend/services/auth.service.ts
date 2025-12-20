import { api } from "./api"

interface LoginPayload {
  username: string;
  password: string;
}


export const loginUser = async (payload: LoginPayload) => {
    // WRONG: This sends { "payload": { "username": "...", "password": "..." } }
    // const res = await api.post('/University/Users/Login', { payload });

    // CORRECT: This sends { "username": "...", "password": "..." }
    const res = await api.post('/University/Users/Login', payload);

    return res.data;
}