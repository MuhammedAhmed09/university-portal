import { adminBody } from "@/components/dashboard/dashboard-json";
import Sidebar from "@/components/dashboard/layout/side-bar";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <main>
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar body={adminBody} title="Admin Panel" dashboard="/dashboard"/>
        
            <main className="p-6 w-full flex-1">  
                {children}
            </main>
        </div>
    </main>
  );
};