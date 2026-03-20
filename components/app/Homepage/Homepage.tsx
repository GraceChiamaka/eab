import { Contact } from "./Contact";
import { Countries } from "./Countries";
import { Hero } from "./Hero";
import { Impact } from "./Impact";
import { Partners } from "./Partners";
import { Stats } from "./Stats";

export const Homepage = () => {
	return (
		<>
			<Hero />
			<Stats />
			<Impact />
			<Partners />
			<Countries />
			<Contact />
		</>
	)
}