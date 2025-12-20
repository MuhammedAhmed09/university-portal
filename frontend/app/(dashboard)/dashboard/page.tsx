'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      router.push("/login");
      return;
    }

    if (role !== "ROLE_Admin") {
      router.push("/unauthorized");
      return;
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push('/login');
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Welcome Admin 👋</h2>
        <Button onClick={handleLogout} variant="outline">
          Sign Out
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow">
          👤 Users
        </div>
        <div className="bg-white p-6 rounded shadow">
          📚 Courses
        </div>
        <div className="bg-white p-6 rounded shadow">
          📊 Reports
        </div>
      </div>
    </div>
  );
}
