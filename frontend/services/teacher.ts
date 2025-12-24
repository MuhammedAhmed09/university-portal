import { CreateLabPayload } from "@/app/(dashboard)/teacher/labs/create/page";
import axios from "axios";

export const createLab = async (payload: CreateLabPayload) => {
    const res = await axios.post('/University/Users/Teacher/Lab', payload);

    return res.data;
}