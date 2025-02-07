import Link from "next/link";
import Markdown from "react-markdown";
import { getRecipeDetail } from "@/lib/getRecipeDetailMetadata";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import getRecipeMetadata from "@/lib/getRecipeMetadata";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const title = slug && slug.replaceAll("_", " ").toUpperCase();

	return {
		title: "EPICRECIPES - " + title,
	};
}

export async function generateStaticParams() {
	const recipes = getRecipeMetadata("recipes");
	return recipes.map((recipe) => ({ slug: recipe.slug }));
}

type RecipeDetailProps = {
	params: Promise<{ slug: string }>;
};

export default async function RecipeDetail({ params }: RecipeDetailProps) {
	const { slug } = await params;

	const recipe = getRecipeDetail(slug);

	return (
		<div className="my-10 px-3 py-3 border-b shadow-md rounded-md">
			<div className="w-full flex justify-end mb-5">
				<Link
					href={`/recipes`}
					className="flex  max-w-fit font-semibold hover:underline items-center gap-x-2"
				>
					<ArrowLeft size={16} />
					Back to Home
				</Link>
			</div>
			<div className="flex items-start justify-between">
				<div className="order:last border hidden lg:block rounded-lg shadow-md max-w-md p-3">
					<div className="flex items-center gap-x-2">
						<Badge className="rounded-full">{recipe.author}</Badge>
						<Badge className="rounded-full space-x-1">
							<CalendarDays size={16} />
							<span>{recipe.created_at}</span>
						</Badge>
					</div>
					<Badge className="mt-2 rounded-full space-x-1 max-w-fit">
						<Clock size={16} />
						<span>{recipe.cook_time}</span>
					</Badge>
					<p className="">{recipe.description}</p>
				</div>
				<Markdown className="order-first prose-sm md:prose-base  dark:prose-invert">
					{recipe.body}
				</Markdown>
			</div>
		</div>
	);
}
