import { Source_Serif_4, Source_Sans_3 } from "next/font/google"

import "./globals.css";
import { cn } from "@/lib/utils";

const fontSourceSans = Source_Sans_3({
	subsets: ["latin"],
	variable: "--font-sans",
})

const fontSourceSerif = Source_Serif_4({
	subsets: ["latin"],
	variable: "--font-mono",
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
			className={cn("antialiased", fontSourceSans.variable, "font-sans", fontSourceSerif.variable)}
		>
			<body>
				{children}
			</body>
		</html>
	)
}
