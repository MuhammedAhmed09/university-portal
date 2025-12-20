'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  User,
  Cpu
} from 'lucide-react';


const users = [
  {laber: 'Teachers', href: '/teacher', icon: <GraduationCap size={16} />},
  {laber: 'Professor', href: '/professor', icon: <Cpu size={16} />},
  {laber: 'Students', href: '/student', icon: <User size={16} />},
];

export default function Sidebar() {
  const [usersOpen, setUsersOpen] = useState(false);

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6 font-bold text-xl border-b">
        Admin Panel
      </div>

      <nav className="p-4 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <button
          onClick={() => setUsersOpen(!usersOpen)}
          className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-100"
        >
          <span className="flex items-center gap-2">
            <Users size={18} />
            Users
          </span>
          <span className='text-gray-700'>{usersOpen ? '▲' : '▼'}</span>
        </button>

        {usersOpen && (
          <div className="ml-6 space-y-1">
            {users.map((user) => (
                <Link
                  href={user.href}
                  key={user.laber}
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
                >
                  {user.icon}
                  {user.laber}
                </Link>
            ))}
          </div>
        )}
      </nav>
    </aside>
  );
}
