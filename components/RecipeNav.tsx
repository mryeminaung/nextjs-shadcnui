import { ModeToggle } from "./ModeToggle";

export default function RecipeNav() {
	return (
		<div className="flex items-center justify-between border-b pb-3 rounded-md px-3 shadow-md">
			<h3 className="text-2xl md:text-3xl font-semibold">EPICRECIPES</h3>
			<ModeToggle />
		</div>
	);
}
