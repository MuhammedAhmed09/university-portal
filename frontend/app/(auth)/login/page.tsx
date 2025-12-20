'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { loginUser } from '@/services/auth.service';
import axios from "axios";

export default function LoginPage() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // ✅ Redirect if already logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/dashboard");
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = await loginUser({ username, password });
            console.log("Login success:", data);

            // ❌ التعامل مع المسافات في المفاتيح
            const token = data["Token "];
            const rolesArray = data["Role "];

            if (!token || !rolesArray?.length) {
                toast.error("Login failed or no role assigned");
                return;
            }

            // أول role في المصفوفة
            const role = rolesArray[0].authority;

            // خزن الـ token والـ role
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);

            toast.success("Logged in successfully!");

            // توجيه بناءً على الـ role
            switch(role) {
                case "ROLE_Admin":
                    router.push("/dashboard");
                    break;
                case "ROLE_Teacher":
                    router.push("/users/teachers");
                    break;
                case "ROLE_Student": 
                    router.push("/users/students");
                    break;
                case "ROLE_Doctor": 
                    router.push("/users/university-doctors");
                    break;
                default: 
                    toast.error("Unknown role");
                    localStorage.clear();
            }
            
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || "Invalid username or password";
                toast.error(message);
            } else if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Login failed");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Username</label>
                    <Input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoComplete="username"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 font-medium">Password</label>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                    />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </Button>
            </form>

            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    );
}
