"use client";
import {
	Select,
	SelectTrigger,
	Button,
	SelectValue,
	SelectContent,
	SelectItem,
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupTextarea,
	FieldError
} from "@/components/ui";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const contactFormSchema = z.object({
	email: z.email("Please enter a valid email address"),
	full_name: z.string().min(3, "Name must be at least 3 characters.").max(50, "Name must not be more 100 characters."),
	subject: z.string(),
	message: z.string().min(10, "Message must be at least 10 characters.").max(200, "Message must not be more than 200 characters."),
});

const subjects = [
	"General Enquiry",
	"Admissions",
	"Support",
	"Partnerships",
	"Other",
];

export const ContactForm = () => {
	const [apiState, setApiState] = useState({
		loading: false,
		error: null as string | null,
		success: false,
		status: "IDLE"
	});

	const { handleSubmit, control, reset, formState } = useForm<
		z.infer<typeof contactFormSchema>
	>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			subject: "",
			full_name: "",
			email: "",
			message: "",
		},
	});

	useEffect(() => {

		if (apiState.success) {
			toast.success(" Message sent successfully! 🎉", { position: "top-center" });
		}
		if (apiState.error) {
			toast.error(apiState.error, { position: "top-center" });
		}
	}, [apiState.success, apiState.error]);


	const submitContactForm = async (data: z.infer<typeof contactFormSchema>) => {
		setApiState((prev) => ({ ...prev, loading: true, error: null, success: false, status: "PENDING" }));
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || "Failed to submit form");
			}

			setApiState({ loading: false, error: null, success: true, status: "SUCCESS" });
			reset();
		} catch (error: any) {
			setApiState({ loading: false, error: error.message || "Something went wrong. Please try again.", success: false, status: "ERROR" });
		}
	};
	return (
		<form className="mt-10 block" onSubmit={handleSubmit(submitContactForm)}>
			<div className="mb-4">
				<Controller
					name="subject"
					control={control}
					rules={{ required: true }}
					render={({ field, fieldState }) => (
						<div>
							<Select
								name={field.name}
								onValueChange={(value) => {
									field.onChange(value);
								}}
							>
								<SelectTrigger
									className="mb-6 h-16! w-full rounded-sm bg-white  text-lg text-black!"
									aria-invalid={fieldState.invalid}
								>
									<SelectValue
										placeholder={
											<span className="text-black">
												Subject <span className="text-red-100">*</span>
											</span>
										}
									/>
								</SelectTrigger>
								<SelectContent>
									{subjects.map((item) => (
										<SelectItem
											key={item.toLowerCase().replace(" ", "-")}
											value={item.toLowerCase().replace(" ", "-")}
										>
											{item}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FieldError errors={[formState.errors.subject]} />
						</div>

					)}
				/>
			</div>

			<div className="mb-4 flex flex-col xl:flex-row gap-2">
				<div className="w-full xl:w-1/2">

					<Controller
						name="full_name"
						control={control}
						rules={{ required: true }}
						render={({ field, fieldState }) => (
							<div>

								<InputGroup className="mb-6 h-16 w-full rounded-sm bg-white">
									<InputGroupInput
										id={"full_name"}
										placeholder=""
										className="caret-black text-black"
										aria-invalid={fieldState.invalid}
										{...field}
									/>
									<InputGroupAddon align={"inline-start"}>
										<span className="text-black text-lg">
											Full name <span className="text-red-100">*</span>
										</span>
									</InputGroupAddon>
								</InputGroup>
								<FieldError errors={[formState.errors.full_name]} />
							</div>
						)}
					/>
				</div>
				<div className="w-full xl:w-1/2">
					<Controller
						name="email"
						control={control}
						rules={{
							required: true,
							validate: (value) =>
								/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
								"Please enter a valid email address",
						}}
						render={({ field, fieldState }) => (
							<div>

								<InputGroup className="mb-6 h-16 w-full rounded-sm bg-white">
									<InputGroupInput
										id={"email"}
										placeholder=""
										type={"email"}
										className="caret-black text-black"
										aria-invalid={fieldState.invalid}
										{...field}
									/>
									<InputGroupAddon align={"inline-start"}>
										<span className="text-black text-lg">
											Email address <span className="text-red-100">*</span>
										</span>
									</InputGroupAddon>
								</InputGroup>
								<FieldError errors={[formState.errors.email]} />
							</div>
						)}
					/>
				</div>
			</div>
			<div className="w-full">
				<Controller
					name="message"
					control={control}
					rules={{ required: true }}
					render={({ field, fieldState }) => (
						<div>
							<InputGroup className=" w-full rounded-sm bg-white">
								<InputGroupTextarea
									placeholder=""
									id={"message"}
									className="caret-black text-black"
									aria-invalid={fieldState.invalid}
									{...field}
								/>
								<InputGroupAddon align={"block-start"}>
									<span className="text-lg text-black">
										Message <span className="text-red-100">*</span>
									</span>
								</InputGroupAddon>
							</InputGroup>
							<FieldError errors={[formState.errors.message]} />
						</div>
					)}
				/>
			</div>
			<div className="mt-6 text-center">
				<Button
					variant={"secondary"}
					type={"submit"}
					className={"h-15 px-14 rounded-xl"}
					disabled={apiState.loading}
				>
					{apiState.loading ? "Submitting..." : "Submit"}
				</Button>
			</div>
		</form >
	);
};
