"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type Props = {
    country: string;
};

export default function CountryRFQ({
    country,
}: Props) {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [quantity, setQuantity] = useState("");
    const [productRequired, setProductRequired] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const [errors, setErrors] = useState<{
        name?: string;
        company?: string;
        email?: string;
        phone?: string;
        message?: string;
    }>({});

    /* ==========================
       VALIDATION
    ========================== */

    const validateForm = () => {
        const newErrors: typeof errors = {};

        const cleanName = name.trim();
        const cleanCompany = company.trim();
        const cleanEmail = email.trim();
        const cleanPhone = phone.trim();
        const cleanMessage = message.trim();

        /* Name */

        if (!cleanName) {
            newErrors.name = "Please enter your name.";
        } else if (cleanName.length < 2) {
            newErrors.name =
                "Name must be at least 2 characters.";
        }

        /* Company */

        if (!cleanCompany) {
            newErrors.company =
                "Please enter your company name.";
        } else if (cleanCompany.length < 2) {
            newErrors.company =
                "Company name must be at least 2 characters.";
        }

        /* Email */

        if (!cleanEmail) {
            newErrors.email =
                "Please enter your email address.";
        } else {
            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(cleanEmail)) {
                newErrors.email =
                    "Please enter a valid email address.";
            }
        }

        /* Phone - optional */

        if (cleanPhone) {
            const phoneDigits =
                cleanPhone.replace(/\D/g, "");

            if (
                phoneDigits.length < 7 ||
                phoneDigits.length > 15
            ) {
                newErrors.phone =
                    "Please enter a valid phone number.";
            }
        }

        /* Message */

        if (!cleanMessage) {
            newErrors.message =
                "Please describe your requirement.";
        } else if (cleanMessage.length < 10) {
            newErrors.message =
                "Please provide a little more detail about your requirement.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    /* ==========================
       SUBMIT
    ========================== */

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setSuccess(false);
        setError("");

        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        setLoading(true);

        try {
            const templateParams = {
                name: name.trim(),
                company: company.trim(),
                email: email.trim(),
                phone: phone.trim(),

                // Automatically comes from the country page
                country: country,

                quantity: quantity.trim(),
                productRequired:
                    productRequired.trim(),
                message: message.trim(),
            };

            /* ==========================
               ADMIN EMAIL
            ========================== */

            await emailjs.send(
                process.env
                    .NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env
                    .NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!,
                templateParams,
                process.env
                    .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            /* ==========================
               CUSTOMER EMAIL
            ========================== */

            await emailjs.send(
                process.env
                    .NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env
                    .NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID!,
                templateParams,
                process.env
                    .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            /* ==========================
               SUCCESS
            ========================== */

            setSuccess(true);

            setName("");
            setCompany("");
            setEmail("");
            setPhone("");
            setQuantity("");
            setProductRequired("");
            setMessage("");
            setErrors({});
        } catch (err) {
            console.error(
                "Country RFQ submission failed:",
                err
            );

            setError(
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="rfq"
            className="scroll-mt-24 bg-white px-4 pt-20"
        >
            <div className="mx-auto max-w-7xl">

                <div className="overflow-hidden rounded-3xl border border-orange-500 bg-neutral-950">

                    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                        {/* ==========================
                            LEFT SIDE
                        ========================== */}

                        <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                                    Request a Quote
                                </p>

                                <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Need Marine
                                    <br />
                                    Spare Parts in {country}?
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                                    Send us your requirement and our marine
                                    sourcing team will review your request
                                    and respond with availability, pricing,
                                    lead time and shipping options.
                                </p>

                                {/* Benefits */}

                                <div className="mt-8 grid gap-3 sm:grid-cols-2">

                                    {[
                                        "Genuine & OEM Parts",
                                        "Global Sourcing",
                                        "Competitive Pricing",
                                        "Worldwide Delivery",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                                        >
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                                                ✓
                                            </span>

                                            {item}
                                        </div>
                                    ))}

                                </div>

                                {/* Information */}

                                <div className="mt-10 space-y-6">

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                                            Delivery
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-white/70">
                                            We can arrange delivery to your
                                            specified port or location in{" "}
                                            {country}.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                                            Email
                                        </p>

                                        <p className="mt-2 break-all text-base font-medium text-white sm:text-lg">
                                            sales@shipsparesworldwide.com
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                                            Marine Spare Parts
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-white/70">
                                            Engine parts, turbocharger spares,
                                            pump components, air compressor
                                            parts and other ship machinery.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ==========================
                            RIGHT SIDE
                        ========================== */}

                        <div className="bg-white p-6 sm:p-8 lg:p-10">

                            <div className="mb-7">
                                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                                    Marine Spare Parts RFQ
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-neutral-950">
                                    Send Your Requirement
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-neutral-500">
                                    Provide the part number, manufacturer,
                                    engine model or product details whenever
                                    available.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="grid gap-5"
                                noValidate
                            >

                                {/* Name */}

                                <div>
                                    <label
                                        htmlFor="country-rfq-name"
                                        className="mb-2 block text-sm font-semibold text-neutral-800"
                                    >
                                        Full Name *
                                    </label>

                                    <input
                                        id="country-rfq-name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);

                                            if (errors.name) {
                                                setErrors((prev) => ({
                                                    ...prev,
                                                    name: undefined,
                                                }));
                                            }
                                        }}
                                        placeholder="Your Name"
                                        className={`w-full rounded-xl border px-4 py-3.5 outline-none transition ${
                                            errors.name
                                                ? "border-red-400 focus:border-red-500"
                                                : "border-neutral-200 focus:border-orange-400"
                                        }`}
                                    />

                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Company */}

                                <div>
                                    <label
                                        htmlFor="country-rfq-company"
                                        className="mb-2 block text-sm font-semibold text-neutral-800"
                                    >
                                        Company *
                                    </label>

                                    <input
                                        id="country-rfq-company"
                                        type="text"
                                        value={company}
                                        onChange={(e) => {
                                            setCompany(e.target.value);

                                            if (errors.company) {
                                                setErrors((prev) => ({
                                                    ...prev,
                                                    company: undefined,
                                                }));
                                            }
                                        }}
                                        placeholder="Your Company"
                                        className={`w-full rounded-xl border px-4 py-3.5 outline-none transition ${
                                            errors.company
                                                ? "border-red-400 focus:border-red-500"
                                                : "border-neutral-200 focus:border-orange-400"
                                        }`}
                                    />

                                    {errors.company && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.company}
                                        </p>
                                    )}
                                </div>

                                {/* Email + Phone */}

                                <div className="grid gap-5 md:grid-cols-2">

                                    <div>
                                        <label
                                            htmlFor="country-rfq-email"
                                            className="mb-2 block text-sm font-semibold text-neutral-800"
                                        >
                                            Email *
                                        </label>

                                        <input
                                            id="country-rfq-email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);

                                                if (errors.email) {
                                                    setErrors((prev) => ({
                                                        ...prev,
                                                        email: undefined,
                                                    }));
                                                }
                                            }}
                                            placeholder="you@example.com"
                                            className={`w-full rounded-xl border px-4 py-3.5 outline-none transition ${
                                                errors.email
                                                    ? "border-red-400 focus:border-red-500"
                                                    : "border-neutral-200 focus:border-orange-400"
                                            }`}
                                        />

                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="country-rfq-phone"
                                            className="mb-2 block text-sm font-semibold text-neutral-800"
                                        >
                                            Phone
                                        </label>

                                        <input
                                            id="country-rfq-phone"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(e.target.value);

                                                if (errors.phone) {
                                                    setErrors((prev) => ({
                                                        ...prev,
                                                        phone: undefined,
                                                    }));
                                                }
                                            }}
                                            placeholder="+49 ..."
                                            className={`w-full rounded-xl border px-4 py-3.5 outline-none transition ${
                                                errors.phone
                                                    ? "border-red-400 focus:border-red-500"
                                                    : "border-neutral-200 focus:border-orange-400"
                                            }`}
                                        />

                                        {errors.phone && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                </div>

                                {/* Country + Quantity */}

                                <div className="grid gap-5 md:grid-cols-2">

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-neutral-800">
                                            Delivery Country / Region
                                        </label>

                                        <div className="flex min-h-[54px] items-center rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm font-medium text-neutral-700">
                                            {country}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="country-rfq-quantity"
                                            className="mb-2 block text-sm font-semibold text-neutral-800"
                                        >
                                            Quantity
                                        </label>

                                        <input
                                            id="country-rfq-quantity"
                                            type="text"
                                            value={quantity}
                                            onChange={(e) =>
                                                setQuantity(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="10 Units"
                                            className="w-full rounded-xl border border-neutral-200 px-4 py-3.5 outline-none transition focus:border-orange-400"
                                        />
                                    </div>

                                </div>

                                {/* Product */}

                                <div>
                                    <label
                                        htmlFor="country-rfq-product"
                                        className="mb-2 block text-sm font-semibold text-neutral-800"
                                    >
                                        Part / Product Required
                                    </label>

                                    <input
                                        id="country-rfq-product"
                                        type="text"
                                        value={productRequired}
                                        onChange={(e) =>
                                            setProductRequired(
                                                e.target.value
                                            )
                                        }
                                        placeholder="e.g. MAN B&W cylinder liner, Woodward governor, Alfa Laval purifier"
                                        className="w-full rounded-xl border border-neutral-200 px-4 py-3.5 outline-none transition focus:border-orange-400"
                                    />
                                </div>

                                {/* Message */}

                                <div>
                                    <label
                                        htmlFor="country-rfq-message"
                                        className="mb-2 block text-sm font-semibold text-neutral-800"
                                    >
                                        Requirement Details *
                                    </label>

                                    <textarea
                                        id="country-rfq-message"
                                        rows={6}
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);

                                            if (errors.message) {
                                                setErrors((prev) => ({
                                                    ...prev,
                                                    message: undefined,
                                                }));
                                            }
                                        }}
                                        placeholder="Tell us your requirement, vessel details, engine model, part number, urgency, destination port, etc."
                                        className={`w-full resize-none rounded-xl border px-4 py-3.5 outline-none transition ${
                                            errors.message
                                                ? "border-red-400 focus:border-red-500"
                                                : "border-neutral-200 focus:border-orange-400"
                                        }`}
                                    />

                                    {errors.message && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Submit */}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-1 inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading
                                        ? "Sending..."
                                        : "Send Marine Spare Parts RFQ"}

                                    {!loading && (
                                        <span className="ml-2">
                                            →
                                        </span>
                                    )}
                                </button>

                                {/* Success */}

                                {success && (
                                    <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-700">
                                        Thank you. Your enquiry has been
                                        submitted successfully. Our team will
                                        review your requirement and contact you
                                        shortly.
                                    </div>
                                )}

                                {/* Error */}

                                {error && (
                                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-600">
                                        {error}
                                    </div>
                                )}

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}