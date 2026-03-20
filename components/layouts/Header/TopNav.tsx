import {
	Select,
	Separator,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	Text,
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export const TopNav = () => {
	return (
		<div className="hidden justify-between bg-gray-100 px-10 xl:flex">
			<Select>
				<SelectTrigger className="w-full max-w-22 rounded-none! border-0 bg-white font-poppins text-xs font-medium text-black-100!">
					<SelectValue placeholder="English" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Select Language</SelectLabel>
						<SelectItem value="english">English</SelectItem>
						<SelectItem value="banana">Spanish</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<div className="flex gap-5 py-3.5">
				<Text
					variant={"h6"}
					className="font-source-sans font-bold text-green-100"
				>
					EAB Hub
				</Text>
				<Separator orientation="vertical" className="bg-black" />
				<InputGroup
					className={cn(
						"group-focus-visible:ring-none! transition-border group/input-group:focus-visible:border-b group/input-group:focus-visible:border-black h-6 w-30 rounded-none border-0 shadow-none! outline-0 duration-300 ease-in-out"
					)}
				>
					<InputGroupInput
						placeholder="Search..."
						className="focus-visible:ring-none! text-black focus-visible:shadow-none!"
					/>
					<InputGroupAddon align={"inline-start"}>
						<Search className="size-6 text-black" />
					</InputGroupAddon>
				</InputGroup>
			</div>
		</div>
	);
};
