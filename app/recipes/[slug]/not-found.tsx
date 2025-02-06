import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function NotFound() {
	return (
		<div className="text-center p-8 mx-auto my-10 bg-white rounded-lg shadow-md max-w-md w-full">
			<UtensilsCrossed
				className="mx-auto text-slate-600 mb-4"
				size={64}
			/>
			<h1 className="text-xl md:text-3xl font-bold text-slate-800 mb-2">
				Recipe Not Found
			</h1>
			<p className="text-slate-600 mb-6">
				Oops! It seems the recipe you are looking for has vanished from
				our kitchen.
			</p>
			<Link
				href="/recipes"
				className="inline-block bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition-colors"
			>
				Browse All Recipes
			</Link>
		</div>
	);
}
