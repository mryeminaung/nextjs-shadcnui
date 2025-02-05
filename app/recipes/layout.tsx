import RecipeNav from "@/components/RecipeNav";
import React from "react";

export default function RecipeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-6xl p-5 border shadow-md rounded-md mx-auto">
			<RecipeNav />
			{children}
		</div>
	);
}
