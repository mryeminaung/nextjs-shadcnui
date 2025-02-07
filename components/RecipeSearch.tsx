import { Input } from "./ui/input";

type RecipeSearchProps = {
	searchRecipe: string;
	setSearchRecipe: (searchRecipe: string) => void;
};

export default function RecipeSearch({
	searchRecipe,
	setSearchRecipe,
}: RecipeSearchProps) {
	return (
		<div className="flex flex-col md:flex-row items-start md:items-center gap-x-2 justify-between mb-4 md:mb-0">
			<h3 className="text-xl md:text-2xl font-semibold my-4">
				Popular Recipes
			</h3>
			<Input
				value={searchRecipe}
				onChange={(e) => setSearchRecipe(e.target.value)}
				name="searchRecipe"
				className="max-w-xl p-4"
				placeholder="Search recipes..."
			/>
		</div>
	);
}
