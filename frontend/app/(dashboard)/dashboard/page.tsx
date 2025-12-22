import { adminBody } from "@/components/dashboard/dashboard-json";

export default function Page() {
    return(
        <main>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Welcome Admin 👋</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {adminBody.map((item) => (
                    <div key={item.label} className="bg-white p-6 rounded shadow flex items-center gap-2">
                        {item.icon}
                        {item.label}
                    </div>
                ))}
            </div>  
        </main>
    )
}