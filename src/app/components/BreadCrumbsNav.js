"use client";
import { usePathname } from "next/navigation";

export const BreadCrumbsNav = () => {
    const pathname = usePathname();
    if (pathname === "/") return null;

    const pathSegments = pathname.split("/").filter(segment => segment);
		
    return (
        <nav className="bg-gray-300 shadow-md w-full text-xs">
            <ul className="container flex space-x-2">
                <li><a href="/" className="text-sky-800 hover:underline">Головна</a></li>
                {pathSegments.map((segment, index) => {
                    let href = "/" + pathSegments.slice(0, index + 1).join("/");
                    const isLastSegment = index === pathSegments.length - 1;

                    // 🔹 Handle category IDs correctly
                    if (segment.startsWith("c")) return null;

                    return (
                        <li key={index} className="flex items-center">
                            <span className="mx-2 text-gray-500">/</span>
                            <a href={href} className="hover:underline capitalize text-amber-800">
                                {decodeURIComponent(segment.replace(/-/g, " "))}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
