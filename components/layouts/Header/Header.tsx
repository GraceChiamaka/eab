"use client";
import Image from "next/image";
import {
	Button,
	Sheet,
	SheetContent,
	SheetTrigger,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuLink,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui";
import Link from "next/link";
import { TopNav } from "./TopNav";

import { Svg } from "@/assets/svg";
import { MobileNavItem } from "./MobileNavItem";
import { Search, Menu, } from "lucide-react";

export type NavListType = {
	key: string;
	label: string;
	children: { title: string; href: string; }[];
};


const navItems: NavListType[] = [
	{
		key: "about",
		label: "About us",
		children: [
			{ title: "What is EAB", href: "/about/what-is-eab" },
			{ title: "EAB history", href: "/about/history" },
			{ title: "Our structure", href: "/about/structure" },
			{ title: "Our Team", href: "/about/team" },
		],
	},
	{
		key: "eab",
		label: "Why EAB",
		children: [
			{ title: "Mission & Vision", href: "/eab/mission" },
			{ title: "Leadership", href: "/eab/leadership" },
			{ title: "Careers", href: "/eab/careers" },
		],
	},
	{
		key: "support",
		label: "Support us",
		children: [
			{ title: "Donate", href: "/support/donate" },
			{ title: "Volunteer", href: "/support/volunteer" },
			{ title: "Sponsorship", href: "/support/sponsorship" },
		],
	},
	{
		key: "impact",
		label: "Our impact",
		children: [
			{ title: "Success Stories", href: "/impact/stories" },
			{ title: "Annual Reports", href: "/impact/reports" },
			{ title: "Statistics & Data", href: "/impact/statistics" },
			{ title: "Global Reach", href: "/impact/global" },
		],
	},
	{
		key: "study",
		label: "Study at EAB",
		children: [
			{ title: "Admissions", href: "/study/admissions" },
			{ title: "Programs", href: "/study/programs" },
			{ title: "Scholarships", href: "/study/scholarships" },
		],
	},
	{
		key: "committees",
		label: "National Committees",
		children: [
			{ title: "Find a Committee", href: "/committees/find" },
			{ title: "Join a Committee", href: "/committees/join" },
			{ title: "Events", href: "/committees/events" },
		],
	},
];

const EABLogo = () => (
	<Link href="/" className="flex items-center gap-2 shrink-0">
		<Image src={Svg.Logo.src} width={185} height={44} alt="eab logo" />
	</Link>
);

export const Header = () => {
	return (
		<>
			<TopNav />

			{/* Main nav */}
			<nav className="bg-white border-b border-gray-100 shadow-sm px-6 py-4 flex items-center justify-between">
				<EABLogo />

				{/* Desktop nav */}
				<div className="hidden xl:flex items-center gap-1">
					<NavigationMenu>
						<NavigationMenuList>
							{navItems.map((item) => (
								<NavigationMenuItem key={item.key}>
									<NavigationMenuTrigger className="font-source-sans text-sm lg:text-base xl:text-lg font-bold text-black focus:outline-none bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent">
										{item.label}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="min-w-[200px] p-2">
											{item.children.map((child) => (
												<li key={child.href}>
													<NavigationMenuLink asChild>
														<Link
															href={child.href}
															className="block px-4 py-2.5 text-base text-black rounded hover:bg-gray-50 hover:text-[#1a3a6b] transition-colors">

															{child.title}
														</Link>
													</NavigationMenuLink>
												</li>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				<div className="hidden xl:flex items-center gap-2">
					<Button variant={"accent"} className="px-6">
						Apply
					</Button>
					<Button variant={"secondary"} className="px-6">
						Donate
					</Button>
				</div>

				{/* Mobile: search + hamburger */}
				<div className="flex xl:hidden items-center gap-3">
					<button className="text-black hover:text-blue-300">
						<Search className="w-5 h-5" />
					</button>
					<Sheet>
						<SheetTrigger asChild>
							<button className="text-black hover:text-blue-300">
								<Menu className="w-6 h-6" />
							</button>
						</SheetTrigger>
						<SheetContent side="right" className="w-full max-w-sm p-0 flex flex-col">
							{/* Mobile sheet header */}
							<div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
								<EABLogo />
								<div className="flex items-center gap-3">
									<Search className="w-5 h-5 text-gray-500" />
								</div>
							</div>

							{/* Mobile nav items */}
							<div className=" overflow-y-auto px-5 py-2">
								{navItems.map((item) => (
									<MobileNavItem key={item.key} item={item} />
								))}
								<Link
									href="/"
									className="block  px-1  text-green-100 font-semibold text-base"
								>
									EAB Hub
								</Link>
							</div>


							<div className="px-5 py-5 border-t border-gray-100 space-y-4">
								<div className="flex gap-3 flex-1">
									<Button variant={"accent"} className="px-6 flex-1">
										Apply
									</Button>
									<Button variant={"secondary"} className="px-6 flex-1">
										Donate
									</Button>
								</div>
								<div className="flex justify-center">
									<Select defaultValue="en">
										<SelectTrigger className="w-32 text-sm text-gray-600 border-gray-200 h-11 rounded-none!">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="en">English</SelectItem>
											<SelectItem value="fr">French</SelectItem>
											<SelectItem value="es">Spanish</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div >
			</nav >
		</>
	);
};