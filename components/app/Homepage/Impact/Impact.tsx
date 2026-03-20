"use client"
import { Png } from "@/assets/png";
import { Text, Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Impact = () => {
	const [activeFilter, setActiveFilter] = useState("1");
	const handleFilterChange = (filter: string) => {
		setActiveFilter(filter);
	};

	return (
		<div className="bg-blue-100 px-4 py-6 lg:py-30 xl:px-30">
			<div className="mb-16 flex justify-between">
				<div className="md:max-w-3/4 xl:max-w-2/3">
					<Text variant="h2">The impact of EAB</Text>
					<Text variant="h5" className="mt-6">
						Consectetur adipiscing elit duis tristique sollicitudin nibh sit
						amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
						vitae congue
					</Text>
				</div>
				<div className="flex flex-col items-center lg:flex-row">
					<Button
						variant={"ghost"}
						className={cn("bg-transparent!", activeFilter === "1" ? "text-gray-200" : "text-black")}
						onClick={() => handleFilterChange("2")}
					>
						Filter1 <span>/</span>
					</Button>
					<Button
						variant={"ghost"}
						className={cn("bg-transparent!", activeFilter === "1" ? "text-gray-200" : "text-black")}
						onClick={() => handleFilterChange("2")}
					>
						Filter2 <span>/</span>
					</Button>
					<Button
						variant={"ghost"}
						className={cn("bg-transparent!", activeFilter === "1" ? "text-gray-200" : "text-black")}
						onClick={() => handleFilterChange("2")}
					>
						Filter3
					</Button>
				</div>
			</div>

			<div className="slidecontainer flex gap-10">
				<div className="w-full xl:w-2/3">
					<div className="relative flex h-125 w-full">
						<Image src={Png.SportsImg.src} alt="" objectFit="cover" fill />
					</div>
				</div>
				<div className="w-full xl:w-1/3">
					<Text variant="h3">
						EAB Partners with Global Fund for Women to Support Girls in
						Sub-Saharan Africa
					</Text>
					<Text variant="p" className="mt-6 mb-6 text-lg">
						Consectetur adipiscing elit duis tristique sollicitudin nibh sit
						amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
						vitae congue
					</Text>
					<Link href="/" className="inline-flex items-center gap-4">
						<Button
							variant="primary"
							className="h-11! w-11! rounded-full p-0! hover:text-blue-100!"
						>
							<ChevronRight className="size-8" />
						</Button>
						<Text
							variant="h4"
							className="font-source-sans font-bold group-hover:text-blue-100! hover:text-blue-300!"
						>
							Discover
						</Text>
					</Link>
				</div>
			</div>
		</div>
	);
};
