import { Png } from "@/assets/png";
import { Svg } from "@/assets/svg";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Text,
} from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const footerLinksSection1 = [
	{ label: "What is EAB", href: "/" },
	{ label: "Academic Life", href: "/" },
	{ label: "EAB Schools & Colleges", href: "/" },
	{ label: "EAB Short Courses", href: "/" },
	{ label: "Apply", href: "/" },
];
const footerLinksSection2 = [
	{ label: "Jobs" },
	{ label: "Structure" },
	{ label: "History" },
	{ label: "Our impact" },
	{ label: "Donate" },
	{ label: "Alumni Network" },
	{ label: "EAB Short Courses" },
];
const navList = [
	"Sitemap",
	"Info for parents",
	"Info for educators ",
	"FAQs",
	"Media Kit",
	"Terms & conditions ",
	"Data Protection Policy",
	"Privacy Policy",
];

export const Footer = () => {
	return (
		<footer>
			<div className="flex flex-col gap-4 border-t border-white bg-blue-400 px-8 py-8 xl:flex-row xl:gap-30 xl:px-30 xl:py-20">
				<div className="flex w-full flex-col items-center text-center xl:w-1/6 xl:text-left">
					<Image
						src={Svg.LogoWhite.src}
						className="order-1 xl:mb-10"
						width={120}
						height={44}
						alt={"eab logo"}
					/>
					<Text
						variant="h6"
						className="order-3 mb-12 font-normal text-white xl:mb-0"
					>
						EAB International, Third Floor, 55 New Oxford, WC1A 1BS, UK
					</Text>
					<div className="order-2 mt-8 mb-8 flex items-center justify-center gap-4 xl:mb-14 xl:justify-start">
						<Link href={"/"}>
							<Image
								src={Svg.Telegram.src}
								width={44}
								height={44}
								alt={"social icon"}
							/>
						</Link>
						<Link href={"/"}>
							<Image
								src={Svg.Tiktok.src}
								width={44}
								height={44}
								alt={"social icon"}
							/>
						</Link>
						<Link href={"/"}>
							<Image
								src={Svg.Instagram.src}
								width={44}
								height={44}
								alt={"social icon"}
							/>
						</Link>
						<Link href={"/"}>
							<Image
								src={Svg.Youtube.src}
								width={44}
								height={44}
								alt={"social icon"}
							/>
						</Link>
						<Link href={"/"}>
							<Image
								src={Svg.Twitter.src}
								width={44}
								height={44}
								alt={"social icon"}
							/>
						</Link>
					</div>
					<Image
						src={Png.RegLogo.src}
						width={180}
						height={44}
						alt={""}
						className={"hidden xl:inline-block"}
					/>
				</div>

				<div className="flex flex-1 flex-col justify-between text-center xl:flex-row xl:text-left">
					<div className="w-full text-white xl:w-1/5">
						<Text variant="h5" className="text-white">
							Quick links
						</Text>
						<ul className="mt-10">
							{footerLinksSection1.map((item) => (
								<Link href={"/"} key={item.label}>
									<li
										key={item.label}
										className="mb-3 text-lg font-medium hover:text-blue-200"
									>
										{item.label}
									</li>
								</Link>
							))}
						</ul>
					</div>
					<div className="w-full text-white xl:w-1/5">
						<Text variant="h5" className="hidden xl:block">
							Quick links
						</Text>
						<ul className="xl:mt-10">
							{footerLinksSection2.map((item) => (
								<Link href={"/"} key={item.label}>
									<li
										key={item.label}
										className="mb-3 text-lg font-medium hover:text-blue-200"
									>
										{item.label}
									</li>
								</Link>
							))}
						</ul>
					</div>
					<div className="mt-8 w-full pb-20 md:w-full xl:mt-0 xl:w-1/3 xl:pb-0">
						<Text variant="h5" className="mb-4 text-center text-white xl:mb-11">
							EAB around the world
						</Text>
						<div className="relative h-60 w-full md:h-80 xl:h-50 xl:w-90">
							<Image
								src={Svg.WorldMap.src}
								fill
								alt="world map"
								className="object-cover md:object-cover"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-blue-300 px-6 py-6 text-center xl:px-30">
				{navList.map((item) => (
					<Link href={"/"} key={item}>
						{" "}
						<Text
							variant={"span"}
							className="font-poppins font-semibold text-white"
						>
							{item} |
						</Text>{" "}
					</Link>
				))}
			</div>
			<div
				data-component={"Copyright"}
				className="bg-blue-500 px-6 py-6 text-center text-white xl:px-30"
			>
				<Text variant="p" className="mb-8 text-sm font-semibold">
					© 2017 - 2024 EAB International. The United World Colleges
					(International), Third Floor, 55 New Oxford Street, London, WC1A 1BS,
					United Kingdom is a company registered in England and Wales and
					Limited by Guarantee, No. 908758. Registered Charity No. 313690.
				</Text>
				<div className="flex items-center justify-center gap-4">
					<Text variant="span" className="font-poppins text-sm font-semibold">
						Website Design By{" "}
					</Text>
					<Image
						src={Svg.CopyrightLogo.src}
						width={26}
						height={24}
						alt={"copyright designer"}
					/>
				</div>
			</div>
			<div className="alert_container sticky bottom-0 z-1000 flex flex-col items-start justify-center gap-6 bg-blue-200 px-6 py-6 font-poppins md:items-center lg:flex-row xl:px-30">
				<Text
					variant="p"
					className="font-poppins text-[18px] font-bold text-white"
				>
					How can we help you?
				</Text>
				<div className="item-center flex flex-col gap-3 md:flex-row">
					<Select name={"user"}>
						<SelectTrigger className="h-14! w-full rounded-none bg-white px-8 py-4 md:w-auto">
							<SelectValue
								placeholder={
									<span className="text-base text-black">I'm a student</span>
								}
							/>
						</SelectTrigger>
						<SelectContent className="z-1000">
							<SelectItem value="student">I'm a student</SelectItem>
							<SelectItem value="teacher">I'm a student</SelectItem>
							<SelectItem value="advisor">I'm a student</SelectItem>
							<SelectItem value="mentor">I'm a student</SelectItem>
						</SelectContent>
					</Select>
					<Select name={"reason"}>
						<SelectTrigger className="h-14! w-full rounded-none bg-white px-8 py-4 text-base md:w-auto">
							<span className="text-black">
								I want to find out about applications
							</span>
						</SelectTrigger>
						<SelectContent className="z-1000">
							<SelectItem value="student">I'm a student</SelectItem>
							<SelectItem value="teacher">I'm a student</SelectItem>
							<SelectItem value="advisor">I'm a student</SelectItem>
							<SelectItem value="mentor">I'm a student</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</footer>
	);
};
