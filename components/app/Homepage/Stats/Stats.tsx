import { Text } from "@/components/ui";
import Image from "next/image";
import { Png } from "@/assets/png";
import Link from "next/link";
import { Svg } from "@/assets/svg";

export const Stats = () => {
	return (
		<section data-component={"Stats"} className="bg-white pt-12 pl-4 pr-4 xl:pr-0 pb-8  xl:pt-20 xl:pl-32 lg:pb-62">
			<Text variant="h2" className="font-bold! leading-[105%]">EAB</Text>
			<Text variant="h2" className="font-medium! leading-[100%]">A global education made here. </Text>
			<div className="mt-8 flex lg:gap-0 xl:gap-20 flex-wrap xl:mt-22 flex-col lg:flex-row">
				<div className="relative w-full h-140 min-[1600px]:h-180 lg:w-1/2">
					<Image src={Png.MissionBG.src} className="w-full h-full object-cover" alt="eab mission" fill />
					<div className="bg-green-100 text-white px-8 pt-5 pb-8  xl:px-9 xl:py-11 absolute xl:absolute -bottom-22 w-full xl:w-4/5 left-0 right-0 xl:translate-[10%]">
						<Text variant="h5" className="text-xl xl:text-[26px]! font-semibold font-source-sans">At EAB, our mission is to inspire young people to put their talents and energy into driving change around the world, no matter which future path they choose.
						</Text>
						<div className="mt-6 flex justify-between items-center hover:text-green-gradient">
							<Text variant="h6" className="font-bold text-xl">Read more</Text>
							<Link href={"/"}><Image src={Svg.LongArrowRight.src} width={40} height={14} alt="read more link icon" /></Link>
						</div>
					</div>
				</div>
				<div className=" w-full px-18 lg:px-0 lg:pl-0 mt-37.5 lg:mt-0 text-center lg:text-left lg:w-1/3">
					<div className="mb-8  xl:mb-6">
						<Text variant="h2" className="font-medium! lg:font-semibold">90%</Text>
						<Text variant="h5" className="font-normal text-2xl">Employed or in Graduate School</Text>
					</div>
					<div className="mb-8  xl:mb-6">
						<Text variant="h2" className="font-medium!">TOP 100</Text>
						<Text variant="h5" className="font-norma text-2xl">Worldwide for student satisfaction </Text>
					</div>
					<div className="mb-8  xl:mb-6">
						<Text variant="h2" className="font-medium!">$3 million</Text>
						<Text variant="h5" className="font-normal text-2xl">Grants given to EAB students</Text>
					</div>
					<div className="mb-8  xl:mb-6">
						<Text variant="h2" className="font-medium!">95%</Text>
						<Text variant="h5" className="font-normal text-2xl">Employed or in Graduate School</Text>
					</div>
					<div className="mb-8 xl:mb-6">
						<Text variant="h2" className="font-medium!">$ 5 million</Text>
						<Text variant="h5" className="font-normal text-2xl">Donated by our partners over the last financial year</Text>
					</div>
				</div>
			</div>
		</section>
	);
};
