import React from "react";

export default function CardWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="border hover:border-slate-500 hover:shadow-md transition-all hover:scale-[1.02] shadow-sm rounded-xl px-5 py-8">
			{children}
		</div>
	);
}
