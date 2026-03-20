import { Png } from "@/assets/png";
import { Svg } from "@/assets/svg";
import { Text } from "@/components/ui";
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
const list = ["sitemap", "Info for parents", "Info for educators", "FAQ's"];

export const Footer = () => {
	return (
		<footer >
			<div className="flex flex-col xl:flex-row gap-4  xl:gap-30 border-t border-white bg-blue-400 px-8 py-8 xl:px-30 xl:py-20">
				<div className="w-full xl:w-1/6">
					<Image
						src={Svg.LogoWhite.src}
						className="mb-10"
						width={120}
						height={44}
						alt={"eab logo"}
					/>
					<Text variant="h6" className="font-normal text-white">
						EAB International, Third Floor, 55 New Oxford, WC1A 1BS, UK
					</Text>
					<div className="mt-12 flex items-center gap-4 mb-14">
						<Link href={'/'}>
							<Image src={Svg.Telegram.src} width={44} height={44} alt={'social icon'} />
						</Link>
						<Link href={'/'}>
							<Image src={Svg.Tiktok.src} width={44} height={44} alt={'social icon'} />
						</Link>
						<Link href={'/'}>
							<Image src={Svg.Instagram.src} width={44} height={44} alt={'social icon'} />
						</Link>
						<Link href={'/'}>
							<Image src={Svg.Youtube.src} width={44} height={44} alt={'social icon'} />
						</Link>
						<Link href={'/'}>
							<Image src={Svg.Twitter.src} width={44} height={44} alt={'social icon'} />
						</Link>
					</div>
					<Image src={Png.RegLogo.src} width={180} height={44} alt={""} className={"hidden xl:inline-block"} />
				</div>

				<div className="flex justify-between flex-col xl:flex-row flex-1 text-center xl:text-left">
					<div className="w-full xl:w-1/5 text-white">
						<Text variant="h5" className="text-white">
							Quick links
						</Text>
						<ul className="mt-10">
							{footerLinksSection1.map((item) => (
								<Link href={"/"} key={item.label}><li key={item.label} className="mb-3 text-lg font-medium hover:text-blue-200">{item.label}</li></Link>
							))}
						</ul>
					</div>
					<div className="w-full xl:w-1/5  text-white">
						<Text variant="h5" className="">
							Quick links
						</Text>
						<ul className="mt-10">
							{footerLinksSection2.map((item) => (
								<Link href={"/"} key={item.label}><li key={item.label} className="mb-3 text-lg font-medium hover:text-blue-200">{item.label}</li></Link>
							))}
						</ul>
					</div>
					<div className="w-full md:w-full xl:w-1/3 mt-8 xl:mt-0">
						<Text variant="h5" className="mb-11 text-center text-white">
							EAB around the world
						</Text>
						<div className="relative w-full md:h-80 xl:h-50 xl:w-90">

							<Image
								src={Svg.WorldMap.src}
								fill
								alt="world map"
								objectFit="cover"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-blue-300 py-6 px-30">

			</div>
		</footer>
	);
};
