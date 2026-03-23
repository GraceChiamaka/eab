import { BrandCard, Button, Text } from "@/components/ui";
import { Svg } from "@/assets/svg";

export const Partners = () => {
	return (
		<div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-20 bg-white px-6 py-6 xl:px-30 lg:py-30">
			<div className="w-full lg:w-1/2">
				<Text variant="h2" className="leading-[120%]"> A little bit about our work at EAB</Text>
				<Text variant="p" className="mt-6"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
				<Button className="mt-6 px-16! " variant={"primary"}>Donate</Button>
			</div>
			<div className="w-full lg:w-1/2  xl:w-1/3 grid grid-cols-2 gap-4">
				<BrandCard brandLogo={Svg.PestalozziLogo} imgWidth={174} imgHeight={55} imgClassName={"object-scale-down"} />
				<BrandCard brandLogo={Svg.HorizonLogo} />
				<BrandCard brandLogo={Svg.RSAcademicsLogo} />
				<BrandCard brandLogo={Svg.RiseLogo} />
				<BrandCard brandLogo={Svg.TeachLogo} />
				<BrandCard brandLogo={Svg.EllenFoundationLogo} />
			</div>
		</div>
	);
};
