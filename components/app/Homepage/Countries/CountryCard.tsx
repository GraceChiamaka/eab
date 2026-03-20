import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Text, Button } from "@/components/ui";
export const CountryCard = ({
	cardImg,
	variant = "primary",
	label = "",
	ctaLabel = "",
	badgeLabel = "",
}: {
	cardImg: StaticImageData;
	variant: "primary" | "secondary" | "accent";
	label: string;
	ctaLabel: string
	badgeLabel: string;
}) => {
	return (
		<div className="relative h-146 w-full" data-component={"CountryCard"}>
			<div
				className={cn(
					"overlay absolute left-0 z-10 h-full w-full bg-linear-to-b",
					variant === "primary"
						? "bg-transparent xl:from-orange-gradient from-70% xl:to-red-gradient to-30%"
						: variant === "secondary"
							? "xl:from-green-gradient from-80% xl:to-green-100 to-20% "
							: "xl:from-blue-gradient-100 from-60% xl:to-blue-gradient-200 to-20%"
				)}
			>
				<span className={cn("text-white text-sm font-source-sans px-3 py-2 inline-block top-6 left-6 relative", variant === "primary" ? "bg-red-100" : variant === "secondary" ? "bg-green-100" : "bg-blue-gradient-300")} >{badgeLabel}</span>
				<div className={cn(" h-54 md:h-40 lg:h-50 w-full xl:w-3/4 absolute bottom-0 px-6 py-8", variant === "primary" ? "bg-red-100" : variant === "secondary" ? "bg-green-100" : "bg-blue-gradient-300")}>
					<Text variant={'h4'} className="text-white mb-6">{label}</Text>
					<Button variant={"default"} className="bg-white text-black rounded-3xl h-12 px-10! font-bold! text-lg">{ctaLabel}</Button>
				</div>

			</div>
			<Image src={cardImg.src} alt={"communities card"} fill objectFit="cover" />
		</div>
	);
};
