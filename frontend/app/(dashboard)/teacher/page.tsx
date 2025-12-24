import { teacherBody } from "@/components/dashboard/dashboard-json"
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6 w-full flex-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Welcome Teacher 👋</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teacherBody.map((item) => (
              <Link href={item.href} key={item.label} className="bg-white p-6 rounded shadow flex items-center gap-2">
                {item.icon}
                {item.label}
              </Link>
          ))}
      </div>
    </main>
  );
}