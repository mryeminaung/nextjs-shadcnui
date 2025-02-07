import fs from "fs";
import matter from "gray-matter";

export default function getRecipeMetadata(basePath: string) {

    const folder = basePath + "/";
    const files = fs.readdirSync(folder);
    const markdown_files = files.filter((file) => file.endsWith(".md"));

    const loaded_markdown_files = markdown_files.map((file) => {

        const fileContents = fs.readFileSync(`${basePath}/${file}`, "utf8");
        const matterResult = matter(fileContents);

        return {
            slug: matterResult.data.title.replaceAll(" ", "_").toLowerCase(),
            title: matterResult.data.title,
            cook_time: matterResult.data.cook_time,
            author: matterResult.data.author,
            created_at: matterResult.data.created_at,
            description: matterResult.data.description,
            modified_title: matterResult.data.title.toLowerCase(),
        }
    });

    return loaded_markdown_files;
}