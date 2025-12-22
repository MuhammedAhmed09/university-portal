import { api } from "./api";

export interface CreateUserPayload {
  username: string;
  password: string;
  role: string; // ROLE_Admin | ROLE_Teacher | ROLE_Student | ROLE_Doctor
}

export const createUser = async (payload: CreateUserPayload) => {
  const token = localStorage.getItem("token");

  const res = await api.post(
    "/University/Admin/Users",
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
