'use client';

import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
      <h1 className="font-semibold">Dashboard</h1>

      <Button variant="outline">
        Logout
      </Button>
    </header>
  );
}
