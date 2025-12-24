import { CreateAssignmentPayload } from "@/app/(dashboard)/professor/assignments/create/page";
import { CreateCoursePayload } from "@/app/(dashboard)/professor/courses/create/page";
import axios from "axios";

export const createCourse = async (payload: CreateCoursePayload) => {
    const res = await axios.post('/University/Users/Proffesor/Courses', payload);

    return res.data;
}

export const createAssignment = async (payload: CreateAssignmentPayload) => {
    const res = await axios.post('/University/Users/Proffesor/assignment', payload);

    return res.data;
}