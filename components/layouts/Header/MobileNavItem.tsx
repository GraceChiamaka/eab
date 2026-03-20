"use client";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui";
import { useState } from "react";
import { ChevronDown, } from "lucide-react";
import { NavListType } from "./Header";

export const MobileNavItem = ({ item }: { item: NavListType }) => {
	const [open, setOpen] = useState(false);

	return (
		<Collapsible open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger className="flex items-center justify-between w-full py-3.5 px-1 border-b border-gray-100 text-left">
				<span className={`font-semibold text-base ${open ? "text-black" : "text-gray-800"}`}>
					{item.label}
				</span>
				<ChevronDown
					className={`w-4 h-4 transition-transform duration-200 text-black`}
				/>
			</CollapsibleTrigger>
			<CollapsibleContent className="pb-1">
				<div className="flex flex-col pl-2 pt-1 pb-2 gap-0.5">
					{item.children.map((child) => (
						<a
							key={child.href}
							href={child.href}
							className="text-sm text-black py-2 px-2 hover:text-blue-300 transition-colors rounded"
						>
							{child.title}
						</a>
					))}
				</div>
			</CollapsibleContent>
		</Collapsible >
	);
};