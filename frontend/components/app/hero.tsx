'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Hero() {
    return(
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-4"
            >
                All‑in‑One University Management System
            </motion.h2>
            <p className="text-muted-foreground max-w-xl mb-6">
                A modern platform that connects students, doctors, teaching assistants,
                and administrators in one unified system.
            </p>
            <div className="flex gap-4">
                <Link href="/login">
                    <Button size="lg">Get Started</Button>
                </Link>
                <Button size="lg" variant="outline">Explore Features</Button>
            </div>
        </section>
    )
}