import RecipeList from "@/components/RecipeList";
import getRecipeMetadata from "@/lib/getRecipeMetadata";

export default function Recipes() {
	const recipes = getRecipeMetadata("recipes");

	return (
		<div className="px-3">
			<RecipeList recipes={recipes} />
		</div>
	);
}
