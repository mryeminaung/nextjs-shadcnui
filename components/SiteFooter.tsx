"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SiteFooter() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<footer className="bg-white gap-3 mb-5 mx-3 shadow-lg dark:bg-slate-900 dark:text-white p-3 rounded-full px-5 lg:px-10 border-gray-200 dark:border-slate-500 border-t-2 flex items-center justify-center sm:justify-between">
			<p className="space-x-2">
				<span>Created by</span>
				<Link
					target="_blank"
					className="hover:underline font-semibold"
					href={"https://github.com/mryeminaung"}
				>
					Ye Min Aung
				</Link>
			</p>
			{mounted && (
				<div className="hidden sm:flex space-x-2 border border-gray-300 rounded-full px-2">
					<Button
						variant="ghost"
						size="icon"
						className={`rounded-full ${
							theme == "light" ? "bg-slate-400" : ""
						}`}
						onClick={() => setTheme("light")}
					>
						<Sun className="h-[1.2rem] w-[1.2rem]" />
						<span className="sr-only">Light</span>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className={`rounded-full ${
							theme == "system" ? "bg-slate-400" : ""
						}`}
						onClick={() => setTheme("system")}
					>
						<MonitorCog className="h-[1.2rem] w-[1.2rem]" />
						<span className="sr-only">System</span>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className={`rounded-full ${
							theme == "dark" ? "bg-slate-400 text-black" : ""
						}`}
						onClick={() => setTheme("dark")}
					>
						<Moon className="h-[1.2rem] w-[1.2rem]" />
						<span className="sr-only">Dark</span>
					</Button>
				</div>
			)}
		</footer>
	);
}
