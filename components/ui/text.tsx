import * as React from "react"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

export type TextVariant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "span"

const textVariants: Record<TextVariant, string> = {
	h1: " text-[60px]  font-semibold tracking-tight lg:text-[70px] font-source-serif",
	h2: " text-[40px] font-semibold tracking-tight lg:text-[60px] font-source-serif",
	h3: " text-3xl font-semibold tracking-tight lg:text-[40px] font-source-serif",
	h4: " text-xl font-semibold tracking-tight lg:text-2xl font-source-serif",
	h5: " text-lg font-semibold lg:text-xl",
	h6: " text-lg font-source-sans ",
	p: "leading-7 text-base",
	span: "leading-7 text-sm",
}

export interface TextProps {
	variant?: TextVariant
	asChild?: boolean
	className?: string
}

const defaultTag: Record<TextVariant, React.ElementType> = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	p: "p",
	span: "span",
}

const Text = React.forwardRef<HTMLElement, TextProps & React.HTMLAttributes<HTMLElement>>(
	({ variant = "p", asChild = false, className, ...props }, ref) => {
		const Comp = asChild ? Slot.Root : defaultTag[variant]

		return (
			<Comp
				ref={ref as any}
				className={cn(textVariants[variant], className)}
				{...props}
			/>
		)
	}
)
Text.displayName = "Text"

export { Text }
