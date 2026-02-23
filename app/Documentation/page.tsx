export default function DocumentationPage() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-100 mb-4">
                Documentation
            </h1>
            <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
                Welcome to the Dexterity UI documentation. Browse the sidebar to
                explore components, integration guides, and more.
            </p>

            <section className="space-y-6">
                <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-200 mb-2">
                        Getting Started
                    </h2>
                    <p className="text-neutral-400">
                        Install the library and start building beautiful interfaces in
                        minutes. Check out the Overview section for a quick introduction.
                    </p>
                </div>

                <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-200 mb-2">
                        Components
                    </h2>
                    <p className="text-neutral-400">
                        Explore our collection of pre-built, accessible components designed
                        to accelerate your development workflow.
                    </p>
                </div>

                <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-200 mb-2">
                        Integration
                    </h2>
                    <p className="text-neutral-400">
                        Learn how to integrate Dexterity UI with your existing projects,
                        including Next.js, Vite, and more.
                    </p>
                </div>
            </section>
        </div>
    );
}
