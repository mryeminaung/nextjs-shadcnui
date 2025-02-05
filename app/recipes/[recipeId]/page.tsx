import Link from "next/link";

import React from "react";

export default function RecipeDetail() {
	return (
		<div className="mt-10">
			<Link
				href={`/recipes`}
				className="flex group-[]: font-semibold hover:underline items-center gap-x-2"
			>
				Back to Home
			</Link>
			Recipe Detail
		</div>
	);
}
