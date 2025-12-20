// import Header from '@/components/layout/Header';

import Sidebar from "@/components/dashboard/layout/side-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* <Header /> */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
