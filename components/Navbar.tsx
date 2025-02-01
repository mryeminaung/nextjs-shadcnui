import React from "react";
import Link from "next/link";

export default function Navbar() {
	const NavMenus = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Skills", href: "/skills" },
		{ label: "Contact Me", href: "/contact-me" },
		{ label: "Products", href: "/products" },
	];

	return (
		<div className="gap-3 flex flex-wrap">
			{NavMenus.map((menu) => (
				<Link
					key={menu.label}
					className="p-2 rounded-md hover:bg-slate-200 border"
					href={menu.href}
				>
					{menu.label}
				</Link>
			))}
		</div>
	);
}
