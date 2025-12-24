'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { createUser } from "@/services/admin.service";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function Page() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("ROLE_Student");

  // Admin guard
  useEffect(() => {
    const isAdminRole = localStorage.getItem("role");
    if (isAdminRole !== "ROLE_Admin") {
      router.push("/login");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await createUser({ username, password, role });
      console.log(data);
      
      toast.success("User created successfully");
      setUsername("");
      setPassword("");
    } catch (error: unknown) {
      console.log("CREATE USER ERROR", error);

      if (axios.isAxiosError(error)) {
        toast.error(
          error?.response?.data?.message ||
          error?.response?.statusText ||
          "Failed to create user"
        );
      } else if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("Unexpected error");
      }

    } finally {
      setLoading(false);
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <h2 className="text-xl font-bold">Create New User</h2>

        <Input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required/>
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>

        <select
            className="w-full border rounded p-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
        >
            <option value="ROLE_Student">Student</option>
            <option value="ROLE_Teacher">Teacher</option>
            <option value="ROLE_Proffesor">Proffesor</option>
            <option value="ROLE_Admin">Admin</option>
        </select>

        <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Creating User...' : 'Create User'}        
        </Button>
        </form>

        <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}
