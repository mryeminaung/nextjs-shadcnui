"use client";

import ProductCard from "@/components/ProductCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

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

export default function ProductPage() {
	const filterType = useSearchParams().get("category");
	const [products, setProducts] = React.useState<ProductProps[]>([]);

	useEffect(() => {
		const getProducts = async () => {
			const res = await fetch("https://fakestoreapi.com/products");
			const products: ProductProps[] = await res.json();
			setProducts(products);
		};
		getProducts();
	}, []);

	function capatilize(words: string) {
		return words
			.split(" ")
			.map(
				(word: string) =>
					word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
			)
			.join(" ");
	}

	const filteredProducts = filterType
		? products.filter((product) => product.category == filterType)
		: products;

	const categories = [
		"men's clothing",
		"jewelery",
		"electronics",
		"women's clothing",
	];

	return (
		<div>
			<h1 className="text-2xl">All Products</h1>

			<div className="flex flex-wrap gap-2">
				{categories.map((category) => (
					<Link
						key={category}
						className={`${
							filterType == category ? "bg-gray-300" : ""
						} p-1 px-2 hover:bg-gray-300 rounded-md  border`}
						href={`?category=${category}`}
					>
						{capatilize(category)}
					</Link>
				))}
				{filterType && (
					<Link
						className="p-1 px-2 underline"
						href="products"
					>
						Clear filters
					</Link>
				)}
			</div>
			<div className="grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-2">
				{products.length > 0
					? filteredProducts.map((product) => (
							<ProductCard
								key={product.id}
								{...product}
							/>
					  ))
					: [...Array(10)].map((_, i) => <SkeletonCard key={i} />)}
			</div>
		</div>
	);
}
