import React from "react";
import { Badge } from "./ui/badge";
import { CalendarDays, Clock, MoveUpRight } from "lucide-react";
import Link from "next/link";
import CardWrapper from "./CardWrapper";

type RecipeCardProps = {
	title: string;
	cook_time: string;
	author: string;
	created_at: string;
	description: string;
	slug: string;
	modified_title: string;
};

export default function RecipeCard({
	title,
	cook_time,
	author,
	created_at,
	description,
	slug,
}: // modified_title,
RecipeCardProps) {
	return (
		<CardWrapper>
			<h2 className="text-xl font-semibold mb-3">{title}</h2>
			<div className="flex flex-col items-start md:flex-row md:items-center gap-y-2 md:gap-y-0 md:gap-x-2">
				<Badge className="rounded-full">{author}</Badge>
				<Badge className="rounded-full space-x-1">
					<CalendarDays size={16} />
					<span>{created_at}</span>
				</Badge>
			</div>
			<p className="my-3">{description}</p>
			<div className="flex flex-col gap-y-2 md:flex-row md:items-center md:justify-between">
				<Badge className="rounded-full space-x-1 max-w-fit">
					<Clock size={16} />
					<span>{cook_time}</span>
				</Badge>
				<Link
					href={`recipes/${slug}`}
					className="flex hover:underline font-medium items-center gap-x-2"
				>
					Read More
					<MoveUpRight size={16} />
				</Link>
			</div>
		</CardWrapper>
	);
}
