'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPost } from "@/services/blog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export type PostStatus = "DRAFT" | "PUBLISHED";

export interface CreatePostPayload {
  title: string;
  content: string;
  status: PostStatus;
}

export default function Page() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState<PostStatus>("DRAFT");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            toast.error("Title and content are required");
            return;
        };

        setLoading(true);
        try {
            await createPost({ title, content, status});
            toast.success("Post created successfully");
            router.push("/blog")
        } catch {
            toast.error("Failed to create post")
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <section className="min-h-screen bg-gray-100 w-full flex items-center justify-center relative">
            <Link className="absolute left-0 top-0" href="/dashboard/blog/edit">
                <Button variant={"outline"} className="cursor-pointer">Manage Posts</Button>
            </Link>
            <div>
                <form 
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl space-y-4"
                >
                    <h2 className="text-2xl font-bold">Add New Post</h2>

                    <Input
                        placeholder="Post title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <textarea
                        className="w-full border rounded p-2 min-h-45"
                        placeholder="Write your post content..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />

                    <select
                        className="w-full border rounded p-2"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as PostStatus)}
                    >
                        <option value='DRAFT'>Draft</option>
                        <option value='PUBLISHED'>Published</option>
                    </select>

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Saving..." : "Create Post"}
                    </Button>

                    <Toaster position="bottom-right" />
                </form>
            </div>
        </section>
    )
}