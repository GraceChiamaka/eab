import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const PageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

