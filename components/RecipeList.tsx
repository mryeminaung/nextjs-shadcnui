"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeSearch from "./RecipeSearch";

type RecipesListProps = {
	title: string;
	cook_time: string;
	author: string;
	created_at: string;
	description: string;
	slug: string;
	modified_title: string;
};

export default function RecipeList({
	recipes,
}: {
	recipes: RecipesListProps[];
}) {
	const [searchRecipe, setSearchRecipe] = useState("");

	const filteredRecipes = searchRecipe
		? recipes.filter((recipe) =>
				recipe.title.toLowerCase().includes(searchRecipe.toLowerCase())
		  )
		: recipes;

	return (
		<>
			<RecipeSearch
				searchRecipe={searchRecipe}
				setSearchRecipe={setSearchRecipe}
			/>
			{filteredRecipes.length > 0 ? (
				<div className="flex flex-col gap-y-3">
					{filteredRecipes.map((recipe) => (
						<RecipeCard
							key={recipe.title}
							{...recipe}
						/>
					))}
				</div>
			) : (
				<div className="text-center p-8 mx-auto my-10 bg-white rounded-lg shadow-md w-full">
					<h1 className="text-xl md:text-3xl font-bold text-slate-800 mb-2">
						Recipe Not Found
					</h1>
					<p className="text-slate-600 mb-6">
						Oops! It seems the recipe you are looking for has
						vanished from our kitchen.
					</p>
				</div>
			)}
		</>
	);
}
