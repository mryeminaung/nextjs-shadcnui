import React from "react";
import RecipeCard from "./RecipeCard";
import getRecipeMetadata from "@/lib/getRecipeMetadata";

export default function RecipeList() {
	const recipes = getRecipeMetadata("recipes");

	return (
		<div className="flex flex-col gap-y-3">
			{recipes.map((recipe) => (
				<RecipeCard
					key={recipe.title}
					{...recipe}
				/>
			))}
		</div>
	);
}
