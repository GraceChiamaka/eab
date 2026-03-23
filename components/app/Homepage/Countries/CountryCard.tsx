import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Text, Button } from "@/components/ui";
import { Svg } from "@/assets/svg";
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
	ctaLabel: string;
	badgeLabel: string;
}) => {
	return (
		<div className="relative h-146 w-full" data-component={"CountryCard"} style={{
			backgroundImage: `url(${cardImg.src})`,
			backgroundSize: 'cover',
			backgroundRepeat: "no-repeat"
		}}>
			<span
				className={cn(
					"relative top-6 left-6 inline-block px-3 py-2 font-source-sans text-sm text-white z-10",
					variant === "primary"
						? "bg-red-100"
						: variant === "secondary"
							? "bg-green-100"
							: "bg-blue-gradient-300"
				)}
			>
				{badgeLabel}
			</span>
			<div className="absolute h-106 w-full z-10 bottom-0 left-0" data-component={"backdrop"} style={{
				backgroundImage: `url(${variant === "primary"
					? Svg.RedBackdrop.src
					: variant === "secondary"
						? Svg.GreenBackdrop.src
						: Svg.BlueBackdrop.src})`,
				backgroundSize: 'cover',
				backgroundRepeat: "no-repeat"
			}}>
				<div
					className={cn(
						"absolute bottom-0 h-50 w-full px-6 py-8 md:h-44 lg:h-50 z-10",
						variant === "primary"
							? "bg-red-100"
							: variant === "secondary"
								? "bg-green-100"
								: "bg-blue-gradient-300"
					)}
				>
					<Text variant={"h4"} className="mb-6 h-12 lg:h-20 xl:h-16 text-xl! text-white">
						{label}
					</Text>
					<Button
						variant={"default"}
						className="h-12 rounded-3xl bg-white px-10! text-lg font-bold! text-black"
					>
						{ctaLabel}
					</Button>
				</div>
			</div>
		</div>
	);
};
