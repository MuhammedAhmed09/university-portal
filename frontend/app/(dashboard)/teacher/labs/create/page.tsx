'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createLab } from "@/services/teacher";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


export interface CreateLabPayload {
  title: string;
  content: string;
};

export default function Page() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            toast.error("Title and content are required");
            return;
        };

        setLoading(true);
        try {
            await createLab({ title, content });
            toast.success("Lab created successfully");
            router.push("/teacher/labs/create")
        } catch {
            toast.error("Failed to create Lab")
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <section className="min-h-screen bg-gray-100 w-full flex items-center justify-center relative">
            <form 
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl space-y-4"
            >
                <h2 className="text-2xl font-bold">Add New Lab</h2>

                <Input
                    placeholder="Lab title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <textarea
                    className="w-full border rounded p-2 min-h-45"
                    placeholder="Write your lab content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />

                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Saving..." : "Create Lab"}
                </Button>

                <Toaster position="bottom-right" />
            </form>
        </section>
    )
}