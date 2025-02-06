import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";

export function SkeletonCard() {
	return (
		<motion.div>
			<div className="bg-gray-100 dark:bg-slate-800 rounded-lg shadow-md overflow-hidden w-full max-w-sm mx-auto flex flex-col">
				<div className="relative aspect-square overflow-hidden flex-shrink-0">
					<Skeleton className="w-full h-full" />
				</div>
				<div className="p-4 flex flex-col flex-grow">
					<Skeleton className="h-6 w-3/4 mb-2" />
					<Skeleton className="h-4 w-1/4 mb-2" />
					<Skeleton className="h-3 w-1/6 mb-2" />
					<div className="flex md:items-center mb-2 flex-col md:flex-row items-start gap-2">
						<div className="flex items-center">
							{[...Array(5)].map((_, i) => (
								<Skeleton
									key={i}
									className="w-4 h-4 mr-1"
								/>
							))}
						</div>
						<Skeleton className="h-4 w-10" />
						<Skeleton className="h-4 w-24" />
					</div>
					<Skeleton className="h-4 w-full mb-2" />
					<Skeleton className="h-4 w-full mb-4" />
					<Skeleton className="w-full h-8 mt-auto" />
				</div>
			</div>
		</motion.div>
	);
}
