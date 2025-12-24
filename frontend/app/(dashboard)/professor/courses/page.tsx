import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <section className="min-h-screen bg-gray-100 w-full flex items-center justify-center relative">
            <Link className="absolute left-0 top-0" href="/professor/courses/create">
                <Button variant={"outline"} className="cursor-pointer">Create a Course</Button>
            </Link>
        </section>
    )
}