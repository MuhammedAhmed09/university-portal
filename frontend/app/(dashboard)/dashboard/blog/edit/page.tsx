import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <section className="min-h-screen bg-gray-100 flex relative items-center justify-center">
            <Link className="absolute left-0 top-0" href="/dashboard/blog">
                <Button variant={"outline"} className="cursor-pointer">New Post!</Button>
            </Link>

            <div>
                <h2 className="rounded-lg border shadow-md py-2 px-8">Its comming soon!</h2>
            </div>
        </section>
    )
}