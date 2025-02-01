import ProductCard from "@/components/ProductCard";
import React from "react";

type ProductProps = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

export default async function ProductPage() {
	const res = await fetch("https://fakestoreapi.com/products");
	const products: ProductProps[] = await res.json();

	return (
		<div>
			<h1 className="text-2xl">Product Page</h1>

			<div className="grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-2">
				{products &&
					products.map((product) => (
						<ProductCard
							key={product.id}
							{...product}
						/>
					))}
			</div>
		</div>
	);
}
