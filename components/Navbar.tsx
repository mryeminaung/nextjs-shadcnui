"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import MobileSideNav from "./MobileSideNav";
import NextSvg from "/public/next.svg";
import Image from "next/image";

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
		<nav className="bg-white shadow-md gap-3 mt-3 mx-3 dark:bg-slate-900 dark:text-black  sticky p-3 rounded-full px-5 lg:px-10 top-0 z-50 border-gray-200 dark:border-slate-500 border-b-2 flex items-center justify-between">
			<div className="hidden lg:block max-w-fit">
				<Link href={"/"}>
					<Image
						src={NextSvg}
						alt="Next.Js"
						width={128}
						height={128}
						className="dark:invert"
					/>
				</Link>
			</div>
			<div className="hidden md:flex flex-wrap gap-x-1.5 items-center">
				{NavMenus.map((menu) => (
					<Link
						key={menu.label}
						className={`px-4 py-2 border-b hover:bg-slate-300 dark:hover:bg-slate-600 text-black dark:text-white dark:hover:text-white  rounded-full  ${
							path == menu.href
								? "bg-gray-300 dark:bg-slate-600 dark:text-white"
								: ""
						}`}
						href={menu.href}
					>
						{menu.label}
					</Link>
				))}
			</div>
			<div className="flex items-center gap-x-2 md:hidden order-first">
				<MobileSideNav />
				<Link href={"/"}>
					<Image
						src={NextSvg}
						alt="Next.Js"
						width={128}
						height={128}
						className="dark:invert"
					/>
				</Link>
			</div>
			<div>
				<ModeToggle />
			</div>
		</nav>
	);
}
