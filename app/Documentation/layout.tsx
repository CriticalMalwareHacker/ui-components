"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";

export default function DocumentationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#0a0a0a]">
            {/* Sidebar */}
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />

            {/* Main content area — margin adjusts with sidebar */}
            <main
                className={`relative flex-1 p-8 transition-all duration-300 ${collapsed ? "ml-[68px]" : "ml-65"
                    }`}
            >
                {/* Top-center radial glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[70%] bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.08),transparent)]"
                />
                {/* Linear light-to-dark wash */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-[#0a0a0a]"
                />
                <div className="relative z-10">{children}</div>
            </main>
        </div>
    );
}
