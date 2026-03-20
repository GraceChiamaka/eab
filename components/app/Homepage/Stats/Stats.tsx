import { Text } from "@/components/ui";
import Image from "next/image";
import { Png } from "@/assets/png";
import Link from "next/link";
import { Svg } from "@/assets/svg";

export const Stats = () => {
	return (
		<div className="bg-white pt-6 pl-4 pb-8  xl:pt-20 xl:pl-32 lg:pb-32">
			<Text variant="h2" className="font-bold! leading-[105%]">EAB</Text>
			<Text variant="h2" className="font-medium! leading-[100%] lg:text-[40px]!">A global education made here. </Text>
			<div className="mt-22 flex lg:gap-10 xl:gap-20 flex-col lg:flex-row">
				<div className="relative h-140 min-[1600px]:h-180 lg:w-1/2">
					<Image src={Png.MissionBG.src} className="w-full h-full object-cover" alt="eab mission" fill />
					<div className="bg-green-100 text-white px-9 py-11 absolute -bottom-22 w-full xl:w-4/5 left-0 right-0 xl:translate-[10%]">

						<Text variant="h5" className="xl:text-[26px]! font-semibold font-source-sans">At EAB, our mission is to inspire young people to put their talents and energy into driving change around the world, no matter which future path they choose.
						</Text>
						<div className="mt-6 flex lg:justify-start lg:gap-4 xl:justify-between items-center hover:text-green-gradient">
							<Text variant="h6" className="font-bold text-xl">Read more</Text>
							<Link href={"/"}><Image src={Svg.LongArrowRight.src} width={40} height={14} alt="read more link icon" /></Link>
						</div>
					</div>
				</div>
				<div className=" w-full mt-8 xl:mt-0 text-center xl:text-left lg:w-1/2">
					<div className="mb-4">
						<Text variant="h2" className="text-[60px]! lg:text-[40px]!">90%</Text>
						<Text variant="h5" className="font-normal">Employed or in Graduate School</Text>
					</div>
					<div className="mb-6">
						<Text variant="h2" className="text-[60px]! lg:text-[40px]!">TOP 100</Text>
						<Text variant="h5" className="font-normal">Worldwide for student satisfaction </Text>
					</div>
					<div className="mb-6">
						<Text variant="h2" className="text-[60px]! lg:text-[40px]!">$3 million</Text>
						<Text variant="h5" className="font-normal">Grants given to EAB students</Text>
					</div>
					<div className="mb-6">
						<Text variant="h2" className="text-[60px]! lg:text-[40px]!">95%</Text>
						<Text variant="h5" className="font-normal">Employed or in Graduate School</Text>
					</div>
					<div className="mb-6">
						<Text variant="h2" className="text-[60px]! lg:text-[40px]!">$ 5 million</Text>
						<Text variant="h5" className="font-normal">Donated by our partners over the last financial year</Text>
					</div>
				</div>

			</div>
		</div>
	);
};
