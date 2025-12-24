import { proffBody } from "@/components/dashboard/dashboard-json";
import Sidebar from "@/components/dashboard/layout/side-bar";

export default function ProffesorLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <main>
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar body={proffBody} title="Professor Panel" dashboard="/professor"/>
        
            <main className="p-6 ml-64 flex-1">  
                {children}
            </main>
        </div>
    </main>
  );
};