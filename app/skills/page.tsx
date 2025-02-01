import SkillCard from "@/components/SkillCard";
import React from "react";

export default function SkillsPage() {
	return (
		<div>
			<h1 className="text-2xl">Skills Page</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 py-2">
				<SkillCard />
				<SkillCard />
				<SkillCard />
				<SkillCard />
				<SkillCard />
				<SkillCard />
			</div>
		</div>
	);
}
