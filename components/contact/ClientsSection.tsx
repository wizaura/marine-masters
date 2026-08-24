"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactRFQSection() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
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
        e: React.FormEvent
    ) => {
        e.preventDefault();

        setSuccess(false);
        setError("");

        /* Validate before EmailJS */

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
                country: country.trim(),
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
            setCountry("");
            setQuantity("");
            setProductRequired("");
            setMessage("");
            setErrors({});
        } catch (err) {
            console.error(
                "RFQ submission failed:",
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
        <section className="px-4 pb-12">
            <div
                className="
                    mx-auto
                    max-w-8xl
                    overflow-hidden
                    rounded-4xl
                    border
                    border-orange-500
                    bg-black
                "
            >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                    {/* ==========================
                        LEFT
                    ========================== */}

                    <div
                        className="
                            flex
                            flex-col
                            justify-between
                            p-10
                            lg:p-16
                        "
                    >
                        <div>

                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-orange-400
                                "
                            >
                                Contact Us
                            </p>

                            <h2
                                className="
                                    mt-6
                                    text-4xl
                                    font-bold
                                    leading-tight
                                    text-white
                                    md:text-6xl
                                "
                            >
                                Need Marine
                                <br />
                                Spare Parts?
                            </h2>

                            <p
                                className="
                                    mt-8
                                    max-w-xl
                                    text-lg
                                    leading-relaxed
                                    text-white/70
                                "
                            >
                                Send us your requirement and our marine
                                sourcing team will respond with availability,
                                pricing, lead time, and shipping options.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                <div
                                    className="
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-2
                                        text-sm
                                        text-white/80
                                    "
                                >
                                    ✓ Genuine & OEM Parts
                                </div>

                                <div
                                    className="
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-2
                                        text-sm
                                        text-white/80
                                    "
                                >
                                    ✓ Fast Global Delivery
                                </div>

                            </div>

                        </div>

                        <div className="mt-8 space-y-6">

                            <div>
                                <p className="text-sm uppercase tracking-wider text-orange-400">
                                    Email
                                </p>

                                <p className="mt-2 text-xl font-medium text-white">
                                    sales@shipsparesworldwide.com
                                </p>
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-wider text-orange-400">
                                    Address
                                </p>

                                <p className="mt-2 text-xl font-medium text-white">
                                    Plot no 216, Near old post office,
                                    Kumbharwada, Bhavnagar 364001.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ==========================
                        RIGHT
                    ========================== */}

                    <div
                        className="
                            bg-white
                            p-8
                            md:p-12
                        "
                    >

                        <form
                            onSubmit={handleSubmit}
                            className="grid gap-5"
                            noValidate
                        >

                            {/* Name */}

                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Full Name *
                                </label>

                                <input
                                    id="name"
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
                                    className={`
                                        w-full
                                        rounded-2xl
                                        border
                                        px-5
                                        py-4
                                        outline-none
                                        transition
                                        ${
                                            errors.name
                                                ? "border-red-400 focus:border-red-500"
                                                : "border-neutral-200 focus:border-orange-400"
                                        }
                                    `}
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
                                    htmlFor="company"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Company *
                                </label>

                                <input
                                    id="company"
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
                                    className={`
                                        w-full
                                        rounded-2xl
                                        border
                                        px-5
                                        py-4
                                        outline-none
                                        transition
                                        ${
                                            errors.company
                                                ? "border-red-400 focus:border-red-500"
                                                : "border-neutral-200 focus:border-orange-400"
                                        }
                                    `}
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
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Email *
                                    </label>

                                    <input
                                        id="email"
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
                                        placeholder="youremail@example.com"
                                        className={`
                                            w-full
                                            rounded-2xl
                                            border
                                            px-5
                                            py-4
                                            outline-none
                                            transition
                                            ${
                                                errors.email
                                                    ? "border-red-400 focus:border-red-500"
                                                    : "border-neutral-200 focus:border-orange-400"
                                            }
                                        `}
                                    />

                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Phone
                                    </label>

                                    <input
                                        id="phone"
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
                                        placeholder="+1 000 000 0000"
                                        className={`
                                            w-full
                                            rounded-2xl
                                            border
                                            px-5
                                            py-4
                                            outline-none
                                            transition
                                            ${
                                                errors.phone
                                                    ? "border-red-400 focus:border-red-500"
                                                    : "border-neutral-200 focus:border-orange-400"
                                            }
                                        `}
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
                                    <label
                                        htmlFor="country"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Country
                                    </label>

                                    <input
                                        id="country"
                                        type="text"
                                        value={country}
                                        onChange={(e) =>
                                            setCountry(e.target.value)
                                        }
                                        placeholder="United States"
                                        className="
                                            w-full
                                            rounded-2xl
                                            border
                                            border-neutral-200
                                            px-5
                                            py-4
                                            outline-none
                                            transition
                                            focus:border-orange-400
                                        "
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Quantity
                                    </label>

                                    <input
                                        id="quantity"
                                        type="text"
                                        value={quantity}
                                        onChange={(e) =>
                                            setQuantity(e.target.value)
                                        }
                                        placeholder="10 Units"
                                        className="
                                            w-full
                                            rounded-2xl
                                            border
                                            border-neutral-200
                                            px-5
                                            py-4
                                            outline-none
                                            transition
                                            focus:border-orange-400
                                        "
                                    />
                                </div>

                            </div>

                            {/* Product */}

                            <div>
                                <label
                                    htmlFor="productRequired"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Part / Product Required
                                </label>

                                <input
                                    id="productRequired"
                                    type="text"
                                    value={productRequired}
                                    onChange={(e) =>
                                        setProductRequired(
                                            e.target.value
                                        )
                                    }
                                    placeholder="e.g. Woodward 8521-076 governor, Alfa Laval MAPX-204"
                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-neutral-200
                                        px-5
                                        py-4
                                        outline-none
                                        transition
                                        focus:border-orange-400
                                    "
                                />
                            </div>

                            {/* Message */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Message *
                                </label>

                                <textarea
                                    id="message"
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
                                    className={`
                                        w-full
                                        rounded-2xl
                                        border
                                        px-5
                                        py-4
                                        outline-none
                                        transition
                                        ${
                                            errors.message
                                                ? "border-red-400 focus:border-red-500"
                                                : "border-neutral-200 focus:border-orange-400"
                                        }
                                    `}
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
                                className="
                                    mt-2
                                    rounded-full
                                    bg-orange-400
                                    px-8
                                    py-4
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-orange-500
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            >
                                {loading
                                    ? "Sending..."
                                    : "Send Inquiry"}
                            </button>

                            {/* Success */}

                            {success && (
                                <p className="text-green-600">
                                    Thank you. Your enquiry has
                                    been submitted successfully.
                                </p>
                            )}

                            {/* Error */}

                            {error && (
                                <p className="text-red-600">
                                    {error}
                                </p>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}