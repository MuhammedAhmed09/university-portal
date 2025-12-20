'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Unauthorized Access
      </h1>
      <p className="mb-6 text-gray-600">
        You do not have permission to access this page.
      </p>
      <Button onClick={() => router.push("/login")}>
        Back to Login
      </Button>
    </div>
  );
}
