import { BookOpen, GraduationCap, Shield, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const roles = [
    {
        title: 'Student',
        desc: 'View courses, submit assignments, track grades.',
        icon: GraduationCap,
    },
    {
        title: 'Doctor',
        desc: 'Manage courses, assignments, and grading.',
        icon: BookOpen,
    },
    {
        title: 'Teaching Assistant',
        desc: 'Handle labs, attendance, and materials.',
        icon: Users,
    },
    {
        title: 'Admin',
        desc: 'Control users, roles, and system settings.',
        icon: Shield,
    },
];

export default function Roles() {
    return(
        <section id="roles" className="py-20 px-8 bg-muted/30">
            <h3 className="text-3xl font-semibold text-center mb-10">User Roles</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {roles.map((role) => (
                    <Card key={role.title} className="rounded-2xl shadow-sm">
                        <CardContent className="p-6 text-center space-y-4">
                            <role.icon className="mx-auto h-10 w-10" />
                            <h4 className="font-semibold text-lg">{role.title}</h4>
                            <p className="text-sm text-muted-foreground">{role.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}