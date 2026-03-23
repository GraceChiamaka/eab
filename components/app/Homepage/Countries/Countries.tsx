import { Text } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { CountryItem } from "./CountryItem";
import CountriesList from "./countries.json";
import Link from "next/link";
import { Png } from "@/assets/png";
import { CountryCard } from "./CountryCard";

export const Countries = () => {
	return (
		<section data-component={"Countries"} className="bg-white px-6 py-20 xl:px-30 xl:py-30">
			<div data-component={"CountriesHeading"} className=" mb-6 xl:mb-12 flex flex-col lg:flex-row xl:items-center lg:justify-between items-start">
				<Text
					variant={"h2"}
					className="max-w-2xl leading-[120%] lg:text-[40px] xl:text-[60px] font-medium xl:font-semibold"
				>
					We are present in over <br className="hidden lg:block" /> 150 countries{" "}
				</Text>
				<Link href={"/"} className="hidden xl:block">
					<div className="flex items-center gap-2 underline hover:font-semibold! hover:text-blue-300">
						<Text
							variant="h5"
							className="font-normal group-hover:font-semibold! group-hover:text-blue-300"
						>
							{" "}
							See all National Schools
						</Text>
						<ArrowRight className="group-hover:text-blue-gradient-100" />
					</div>
				</Link>
			</div>
			<div className="flex overflow-x-auto">
				{CountriesList.map((country) => (
					<CountryItem
						name={country.name}
						code={country.code}
						key={country.code}
					/>
				))}
			</div>
			<Link href={"/"} className="block xl:hidden">
				<div className="flex items-center gap-2 mt-8 underline hover:font-semibold! hover:text-blue-300">
					<Text
						variant="h5"
						className="font-normal group-hover:font-semibold! group-hover:text-blue-300"
					>
						{" "}
						See all National Schools
					</Text>
					<ArrowRight className="group-hover:text-blue-gradient-100" />
				</div>
			</Link>
			<div className="mt-12 flex flex-col gap-6 lg:gap-4 xl:gap-6 justify-between lg:flex-row xl:flex-nowrap">
				<div className="w-full lg:w-1/2 xl:w-1/3">
					<CountryCard
						badgeLabel="Apply"
						cardImg={Png.CountryBG1}
						variant="primary"
						label={" Leveraging the EAB Ripple Effect' for Youth-led Social Change "}
						ctaLabel="Find out more"
					/>
				</div>
				<div className="w-full lg:w-1/2 xl:w-1/3">
					<CountryCard
						badgeLabel="Alumni Network"
						cardImg={Png.CountryBG2}
						variant="secondary"
						label={" A title about volunteering in this National Schools"}
						ctaLabel="Volunteer"
					/>
				</div>
				<div className="w-full lg:w-1/2  xl:w-1/3">
					<CountryCard
						badgeLabel="What’s happening"
						cardImg={Png.CountryBG3}
						variant="accent"
						label={"This is a blog/Impact Story linked to this National Schools"}
						ctaLabel="Read more"
					/>
				</div>
			</div>
		</section>
	);
};
