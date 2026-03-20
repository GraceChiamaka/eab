
import { Png } from "@/assets/png";
import { Text } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
	return (
		<div className="relative w-full h-120 min-[1200px]:h-167.5 min-[1400px]:h-175 min-[1600px]:h-200">
			<div className="overlay h-full w-full absolute top-0 left-0 z-10 pl-6 pt-30 md:pt-26 md:pl-20 xl:pl-30 xl:pt-40 min-[1600px]:pt-38.5  min-[1600px]:pl-36">
				<Text variant="h1" className="text-white leading-[100%] ">How will you <br className="hidden md:block" />make your mark?</Text>
				<Link href={"/"}><Text variant={"h4"} className="text-white font-source-sans  font-bold mt-6 relative custom_line">Apply to study</Text></Link>
			</div>
			<Image src={Png.HeroBG.src} alt="eab background image" className="w-full h-full object-cover md:object-fill" fill />
		</div>
	);
}