import { Text } from "@/components/ui";
import Image from "next/image";

export const CountryItem = ({ code, name }: { code: string; name: string }) => {
	return (
		<div className="flex items-center gap-3 min-w-max px-4 py-3 ">

			<Image
				key={code}
				width={44}
				height={44}
				src={`https://flagcdn.com/w320/${code}.png`}
				alt={`${name} flag`}
				className="border-2 border-black"
			/>
			<Text variant={"p"} className="font-semibold font-source-sans">{name}</Text>
		</div>
	);
};
