import { Source_Serif_4, Source_Sans_3, Poppins } from "next/font/google"

import "./globals.css";
import { cn } from "@/lib/utils";
import { PageLayout } from "@/components/layouts/PageLayout";
import { Toaster } from "@/components/ui/sonner";

const fontSourceSans = Source_Sans_3({
	subsets: ["latin"],
	variable: "--font-source-sans",
})

const fontSourceSerif = Source_Serif_4({
	subsets: ["latin"],
	variable: "--font-source-serif",
})
const fontPoppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-poppins",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn("antialiased", fontSourceSans.variable, "font-source-sans", fontSourceSerif.variable, fontPoppins.variable)}
		>
			<body>
				<PageLayout>
					{children}
				</PageLayout>
				<Toaster />
			</body>
		</html>
	)
}
