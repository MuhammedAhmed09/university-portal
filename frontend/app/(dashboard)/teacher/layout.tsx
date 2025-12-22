import { teacherBody } from "@/components/dashboard/dashboard-json";
import Sidebar from "@/components/dashboard/layout/side-bar";

export default function StudentLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <main>
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar body={teacherBody} title="teacher Panel" dashboard="/teacher"/>
        
            <main className="p-6 w-full flex-1">  
                {children}
            </main>
        </div>
    </main>
  );
};