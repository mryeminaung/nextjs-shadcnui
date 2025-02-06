import React from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import { getRecipeDetail } from "@/lib/getRecipeDetailMetadata";
import { ArrowLeft } from "lucide-react";
import getRecipeMetadata from "@/lib/getRecipeMetadata";

export async function generateStaticParams() {
	const recipes = getRecipeMetadata("recipes");
	return recipes.map((recipe) => ({ params: { slug: recipe.slug } }));
}

type RecipeDetailProps = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ query: string }>;
};

export default async function RecipeDetail({ params }: RecipeDetailProps) {
	const { slug } = await params;
	const recipe = getRecipeDetail(slug);

	return (
		<div className="my-10 px-3 py-3 border-b shadow-md rounded-md">
			<div className="w-full flex justify-end">
				<Link
					href={`/recipes`}
					className="flex  max-w-fit font-semibold hover:underline items-center gap-x-2"
				>
					<ArrowLeft size={16} />
					Back to Home
				</Link>
			</div>

			<Markdown className="prose-sm md:prose-base  dark:prose-invert">
				{recipe.body}
			</Markdown>
		</div>
	);
}
