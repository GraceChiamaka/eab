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
		<section data-component={"Impact"} className="bg-blue-100 px-4 py-20 lg:py-30 xl:px-30">
			<div className="mb-16 flex flex-col lg:flex-row justify-between items-start">
				<div className="md:max-w-2/3 xl:max-w-2/3">
					<Text variant="h2">The impact of EAB</Text>
					<Text variant="h5" className="mt-6 font-normal font-source-sans">
						Consectetur adipiscing elit duis tristique sollicitudin nibh sit
						amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
						vitae congue
					</Text>
				</div>
				<div className="flex  items-center flex-row mt-12 lg:mt-0">
					<Button
						variant={"ghost"}
						className={cn("bg-transparent! text-2xl font-bold", activeFilter === "1" ? "text-black" : "text-gray-200")}
						onClick={() => handleFilterChange("1")}
					>
						Filter1 <span >/</span>
					</Button>
					<Button
						variant={"ghost"}
						className={cn("bg-transparent! text-2xl font-bold", activeFilter === "2" ? "text-black" : "text-gray-200")}
						onClick={() => handleFilterChange("2")}
					>
						Filter2 <span className="">/</span>
					</Button>
					<Button
						variant={"ghost"}
						className={cn("bg-transparent! text-2xl font-bold", activeFilter === "3" ? "text-black" : "text-gray-200")}
						onClick={() => handleFilterChange("3")}
					>
						Filter3
					</Button>
				</div>
			</div>

			<div className=" flex gap-10 flex-col lg:flex-row items-center">
				<div className="w-full lg:w-2/3 xl:w-[55%]">
					<div className="relative flex h-80 lg:h-125 xl:h-150 w-full">
						<Image src={Png.SportsImg.src} alt="" className=" object-cover" fill />
					</div>
				</div>
				<div className="w-full lg:w-1/3">
					<Text variant="h4" className="text-2xl xl:text-[40px]">
						EAB Partners with Global Fund for Women to Support Girls in
						Sub-Saharan Africa
					</Text>
					<Text variant="p" className="mt-6 mb-6 text-lg">
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
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
		</section>
	);
};
