import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
    return(
        <nav className="flex items-center gap-x-12 justify-between px-8 py-4 border-b">
            <h1 className="text-xl font-bold">University Portal</h1>
            <div className="flex gap-x-4 items-center">
                <Link href="#features">Features</Link>
                <Link href="#roles">Roles</Link>
                <Link href="/login">
                    <Button>Login</Button>
                </Link>
            </div>
        </nav>
    )
}