"use client";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileSideNav() {
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
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant={"outline"}
					className="dark:text-white"
				>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent
				className="w-[300px]"
				side={"left"}
			>
				<div className="flex gap-3 max-w-44 mx-auto items-center flex-col">
					{NavMenus.map((menu) => (
						<SheetClose
							key={menu.label}
							asChild
						>
							<Link
								className={`py-2 w-full text-center text-black inline-block border-b rounded-full dark:text-white   ${
									path == menu.href
										? "bg-slate-100  dark:bg-slate-900 dark:text-white"
										: ""
								}`}
								href={menu.href}
							>
								{menu.label}
							</Link>
						</SheetClose>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
