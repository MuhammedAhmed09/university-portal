'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { createUser } from "@/services/admin.service";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("ROLE_Student");

  // Admin guard
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ROLE_Admin") {
      router.push("/login");
    }
  }, [router]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await createUser({ username, password, role });
      setLoading(false);
      toast.success("User created successfully");
      setUsername("");
      setPassword("");
    } catch {
      toast.error("Failed to create user");
    }
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
            <option value="ROLE_Doctor">Doctor</option>
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
