'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  Settings,
  Proportions,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type SidebarItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

type SidebarProps = {
  title: string;
  dashboard: string;
  body: SidebarItem[];
};


export default function Sidebar({ body, title, dashboard } : SidebarProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push('/login');
  }

  return (
    <aside className="bg-white shadow-md min-h-screen fixed z-50 w-64">
      <div className="p-6 font-bold text-xl border-b">
        {title}
      </div>

      <nav className="p-4 space-y-2">
        <Link
          href={dashboard}
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <div className="space-y-1 border-y">
          <div className='ml-2 space-y-2 py-10'>
            {body.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
                >
                  {item.icon}
                  {item.label}
                </Link>
            ))}
          </div>
        </div>

        <Link
          href="/settings"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
        >
          <Settings size={18} />
          Settings
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
        >
          <Proportions size={18} />
          Reports
        </Link>

      </nav>

      { title === "Admin Panel" &&
        <div className='w-full text-center border-y p-4 absolute bottom-0'>
          <Button className='cursor-pointer' onClick={handleLogout} variant="outline">
            Sign Out
          </Button>
        </div>      
      }
    </aside>
  );
}
