import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export const BrandCard = ({
	brandLogo,
	brandName,
	imgWidth = 120,
	imgHeight = 44,
	imgClassName = ""
}: {
	brandLogo: StaticImageData;
	brandName?: string;
	imgWidth?: number;
	imgHeight?: number;
	imgClassName?: string;
}) => {
	return (
		<div className="inline-flex justify-center border-b border-gray-200 py-5 xl:py-10">
			<Image
				src={brandLogo.src}
				width={imgWidth}
				height={imgHeight}
				alt={`${brandName} partner logo`}
				className={imgClassName}
			/>
		</div>
	);
};
