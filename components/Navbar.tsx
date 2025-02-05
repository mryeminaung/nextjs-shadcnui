"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
	const path = usePathname();

	const NavMenus = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Skills", href: "/skills" },
		{ label: "Recipes", href: "/recipes" },
		{ label: "Contact Me", href: "/contact-me" },
		{ label: "Products", href: "/products" },
	];

	return (
		<nav className="gap-3 mt-3 mx-3 dark:text-black  sticky p-3 rounded-full top-0 z-50 bg-gray-200 flex items-center justify-between">
			<div className="flex flex-wrap gap-3 items-center">
				{NavMenus.map((menu) => (
					<Link
						key={menu.label}
						className={`p-2 hover:bg-slate-100 dark:hover:bg-slate-900 text-black dark:hover:text-white  rounded-md   ${
							path == menu.href
								? "bg-slate-100 dark:bg-slate-900 dark:text-white"
								: ""
						}`}
						href={menu.href}
					>
						{menu.label}
					</Link>
				))}
			</div>
			<div>
				<ModeToggle />
			</div>
		</nav>
	);
}
