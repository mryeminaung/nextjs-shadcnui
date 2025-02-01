"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const path = usePathname();

	const NavMenus = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Skills", href: "/skills" },
		{ label: "Contact Me", href: "/contact-me" },
		{ label: "Products", href: "/products" },
	];

	return (
		<div className="gap-3 flex flex-wrap sticky p-1 rounded-md top-0 z-50 bg-gray-200">
			{NavMenus.map((menu) => (
				<Link
					key={menu.label}
					className={`p-2 hover:bg-slate-100 rounded-md  border ${
						path == menu.href ? "bg-slate-100" : ""
					}`}
					href={menu.href}
				>
					{menu.label}
				</Link>
			))}
		</div>
	);
}
