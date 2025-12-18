import { BookOpen, Shield, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const features = [
    {
        title: 'Role‑Based Access',
        desc: 'Each user gets a personalized dashboard.',
        icon: Shield,
    },
    {
        title: 'Course Management',
        desc: 'Organize materials, assignments, and grades.',
        icon: BookOpen,
    },
    {
        title: 'Modern UI',
        desc: 'Clean, responsive, and user‑friendly design.',
        icon: Users,
    },
];

export default function Features() {
    return(
        <section id="features" className="py-20 px-8">
            <h3 className="text-3xl font-semibold text-center mb-10">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {features.map((feature) => (
                    <Card key={feature.title} className="rounded-2xl">
                        <CardContent className="p-6 space-y-3">
                            <feature.icon className="h-8 w-8" />
                            <h4 className="font-semibold">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}