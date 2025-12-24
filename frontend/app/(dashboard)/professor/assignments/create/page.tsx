'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createAssignment } from "@/services/proffesor";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


export interface CreateAssignmentPayload {
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
            await createAssignment({ title, content });
            toast.success("Assignment created successfully");
            router.push("/professor/assignments/create")
        } catch {
            toast.error("Failed to create assignment")
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <section className="min-h-screen bg-gray-100 w-full flex items-center justify-center">
            <form 
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl space-y-4"
            >
                <h2 className="text-2xl font-bold">Add New Assignment</h2>

                <Input
                    placeholder="Assignment title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <textarea
                    className="w-full border rounded p-2 min-h-45"
                    placeholder="Write your assignment content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />

                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Saving..." : "Create Assignment"}
                </Button>

                <Toaster position="bottom-right" />
            </form>
        </section>
    )
}