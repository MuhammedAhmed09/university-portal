import { CreatePostPayload } from "@/app/(dashboard)/dashboard/blog/page";

export const createPost = async (payload: CreatePostPayload) => {
    return new Promise((resolve) => {
        console.log("CREATE POST PAYLOAD", payload);
        setTimeout(() => resolve({ success: true }), 800)
    });

    // return api.post({Backend API == blog}, payload);
}