import { Text } from "@/components/ui";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
	return (
		<div className="flex justify-center bg-blue-400 py-8 px-8 xl:px-0 xl:py-30">
			<div className="w-full text-center text-white lg:w-[65%]">
				<Text variant="h2" className="">We are present in over 150 countries </Text>

				<ContactForm />
			</div>
		</div>
	);
};
