import Image from "next/image";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ProductCardProps {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image?: string;
	rating: {
		rate: number;
		count: number;
	};
}

export default function ProductCard({
	title,
	price,
	description,
	category,
	image,
	rating,
}: ProductCardProps) {
	return (
		<div className="bg-white border rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto flex flex-col">
			<div className="relative aspect-square overflow-hidden flex-shrink-0">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					width={400}
					height={400}
					className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
				/>
			</div>
			<div className="p-4 flex flex-col flex-grow">
				<h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
					{title}
				</h2>
				<p className="text-sm text-gray-600 mb-2 capitalize">
					{category}
				</p>
				<p className="text-lg font-bold text-gray-900 mb-2">
					${price.toFixed(2)}
				</p>
				<div className="flex md:items-center mb-2 flex-col md:flex-row items-start gap-2">
					<div className="flex items-center">
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								className={`w-4 h-4 ${
									i < Math.floor(rating.rate)
										? "text-yellow-400 fill-current"
										: "text-gray-300"
								}`}
							/>
						))}
					</div>
					<span className="text-sm text-gray-600">
						{rating.rate} ({rating.count} reviews)
					</span>
				</div>
				<p className="text-sm text-gray-600 mb-4 line-clamp-2">
					{description}
				</p>
				<Button className="w-full mt-auto">Add to Cart</Button>
			</div>
		</div>
	);
}
