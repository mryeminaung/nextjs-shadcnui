"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export default function GoTop() {
	const handleScroll = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="fixed bottom-4 right-4">
			<Button
				onClick={handleScroll}
				className="rounded-full"
			>
				<ArrowUp size={16} />
			</Button>
		</div>
	);
}
