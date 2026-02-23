"use client";

import { useEffect, useRef, useState } from "react";

type MenuItem = { name: string; href: string; icon?: JSX.Element | string };

interface SidebarProps {
    collapsed: boolean;
    onToggle: () => void;
}

/* ─── Collapsible sub-menu ─── */
const Menu = ({
    children,
    items,
    collapsed,
}: {
    children: React.ReactNode;
    items: MenuItem[];
    collapsed: boolean;
}) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div>
            <button
                className="w-full flex items-center justify-between text-gray-400 p-2 rounded-lg hover:bg-white/5 active:bg-white/10 duration-150"
                onClick={() => setIsOpened((v) => !v)}
                aria-expanded={isOpened}
                aria-controls="submenu"
            >
                <div className="flex items-center gap-x-2">{children}</div>
                {!collapsed && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`w-5 h-5 duration-150 ${isOpened ? "rotate-180" : ""}`}
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </button>

            {isOpened && !collapsed && (
                <ul id="submenu" className="mx-4 px-2 border-l border-[#2a2a2a] text-sm font-medium">
                    {items.map((item, idx) => (
                        <li key={idx}>
                            <a
                                href={item.href}
                                className="flex items-center gap-x-2 text-gray-400 p-2 rounded-lg hover:bg-white/5 active:bg-white/10 duration-150"
                            >
                                {item.icon ? <div className="text-gray-500">{item.icon}</div> : null}
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

/* ─── Sidebar ─── */
const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {

    const navigation: MenuItem[] = [
        {
            href: "javascript:void(0)",
            name: "Overview",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>
            ),
        },
        {
            href: "javascript:void(0)",
            name: "Integration",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                </svg>
            ),
        },
        {
            href: "javascript:void(0)",
            name: "Plans",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
            ),
        },
        {
            href: "javascript:void(0)",
            name: "Transactions",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
            ),
        },
    ];

    const navsFooter: MenuItem[] = [
        {
            href: "javascript:void(0)",
            name: "Help",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
            ),
        },
        {
            href: "javascript:void(0)",
            name: "Settings",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    const nestedNav: MenuItem[] = [
        { name: "Cards", href: "javascript:void(0)" },
        { name: "Checkouts", href: "javascript:void(0)" },
        { name: "Payments", href: "javascript:void(0)" },
        { name: "Get paid", href: "javascript:void(0)" },
    ];

    const profileRef = useRef<HTMLButtonElement | null>(null);
    const [isProfileActive, setIsProfileActive] = useState(false);

    useEffect(() => {
        const handleProfile = (e: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
                setIsProfileActive(false);
            }
        };
        document.addEventListener("click", handleProfile);
        return () => document.removeEventListener("click", handleProfile);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 h-full border-r border-[#1a1a1a] bg-[#0a0a0a] space-y-8 transition-all duration-300 ease-in-out z-20 ${collapsed ? "w-[68px]" : "w-65"
                    }`}
            >
                <div className="flex flex-col h-full px-2">
                    {/* ── Header: avatar + collapse toggle ── */}
                    <div className="h-20 flex items-center justify-between px-2">
                        {!collapsed && (
                            <div className="flex items-center gap-x-3 min-w-0">
                                <div className="truncate">
                                    <span className="block text-gray-200 text-3xl font-semibold truncate">
                                        Dexterity UI
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Collapse / expand button */}
                        <button
                            onClick={onToggle}
                            className={`p-1.5 rounded-md text-gray-400 hover:text-gray-200 hover:bg-white/5 active:bg-white/10 transition-colors ${collapsed ? "mx-auto" : ""
                                }`}
                            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={`w-5 h-5 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* ── Navigation links ── */}
                    <div className="overflow-auto flex-1">
                        <ul className="text-sm font-medium flex-1 space-y-1">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="group relative">
                                    <a
                                        href={item.href}
                                        className="flex items-center gap-x-3 text-gray-400 p-2 rounded-lg hover:bg-white/5 hover:text-gray-200 active:bg-white/10 duration-150"
                                    >
                                        <div className="text-gray-500 group-hover:text-gray-300 shrink-0">{item.icon}</div>
                                        {!collapsed && <span>{item.name}</span>}
                                    </a>
                                    {/* Tooltip when collapsed */}
                                    {collapsed && (
                                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded-md bg-[#1a1a1a] text-gray-200 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 z-50">
                                            {item.name}
                                        </div>
                                    )}
                                </li>
                            ))}

                            <li>
                                <Menu items={nestedNav} collapsed={collapsed}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-500 shrink-0"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                    </svg>
                                    {!collapsed && "Billing"}
                                </Menu>
                            </li>
                        </ul>

                        {/* ── Footer nav ── */}
                        <div className="pt-2 mt-2 border-t border-[#1a1a1a]">
                            <ul className="text-sm font-medium space-y-1">
                                {navsFooter.map((item, idx) => (
                                    <li key={idx} className="group relative">
                                        <a
                                            href={item.href}
                                            className="flex items-center gap-x-3 text-gray-400 p-2 rounded-lg hover:bg-white/5 hover:text-gray-200 active:bg-white/10 duration-150"
                                        >
                                            <div className="text-gray-500 group-hover:text-gray-300 shrink-0">{item.icon}</div>
                                            {!collapsed && <span>{item.name}</span>}
                                        </a>
                                        {collapsed && (
                                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded-md bg-[#1a1a1a] text-gray-200 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 z-50">
                                                {item.name}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
