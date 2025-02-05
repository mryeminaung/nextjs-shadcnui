import RecipeList from "@/components/RecipeList";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Recipes() {
	return (
		<div className="px-3">
			<div className="flex flex-col md:flex-row items-start md:items-center gap-x-2 justify-between mb-4 md:mb-0">
				<h3 className="text-xl md:text-2xl font-semibold my-4">Popular Recipes</h3>
				<Input
					className="max-w-xl p-4"
					placeholder="Search recipes..."
				/>
			</div>
			<RecipeList />
		</div>
	);
}
