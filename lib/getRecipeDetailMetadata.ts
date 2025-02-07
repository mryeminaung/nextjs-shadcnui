import { notFound } from "next/navigation";
import fs from "fs";
import matter from "gray-matter";

export const getRecipeDetail = (slug: string) => {
	const path = "recipes";
	const file = `${path}/${slug}.md`;

	if (!fs.existsSync(file)) {
		notFound();
	}
	
	const recipe_markdown = fs.readFileSync(file, "utf8");
	const matterResult = matter(recipe_markdown);

	return {
		title: matterResult.data.title,
		cook_time: matterResult.data.cook_time,
		author: matterResult.data.author,
		created_at: matterResult.data.created_at,
		description: matterResult.data.description,
		slug: matterResult.data.title.replaceAll(" ", "_").toLowerCase(),
		modified_title: matterResult.data.title.toLowerCase(),
		body: matterResult.content,
	};
};
