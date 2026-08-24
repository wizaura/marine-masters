"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ProductRFQ({
    product,
}: {
    product: any;
}) {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [quantity, setQuantity] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        phone?: string;
        quantity?: string;
        message?: string;
    }>({});

    /* ==========================
       VALIDATION
    ========================== */

    const validateForm = () => {
        const newErrors: typeof errors = {};

        const cleanName = name.trim();
        const cleanEmail = email.trim();
        const cleanPhone = phone.trim();
        const cleanQuantity = quantity.trim();
        const cleanMessage = message.trim();

        /* Name */

        if (!cleanName) {
            newErrors.name = "Please enter your name.";
        } else if (cleanName.length < 2) {
            newErrors.name =
                "Name must be at least 2 characters.";
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

        /* Quantity */

        if (!cleanQuantity) {
            newErrors.quantity =
                "Please enter the required quantity.";
        } else {
            const quantityNumber =
                Number(cleanQuantity);

            if (
                !Number.isInteger(quantityNumber) ||
                quantityNumber < 1
            ) {
                newErrors.quantity =
                    "Quantity must be at least 1.";
            }
        }

        /* Message */

        if (!cleanMessage) {
            newErrors.message =
                "Please describe your requirement.";
        } else if (cleanMessage.length < 10) {
            newErrors.message =
                "Please provide a little more detail.";
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
                productRequired: product.title,
                message: message.trim(),
            };

            /* ==========================
               ADMIN EMAIL
            ========================== */

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            /* ==========================
               CUSTOMER EMAIL
            ========================== */

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
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
            setMessage("");
            setErrors({});
        } catch (err) {
            console.error(
                "Product RFQ submission failed:",
                err
            );

            setError(
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    /* ==========================
       FIELD ERROR HELPER
    ========================== */

    const clearError = (
        field: keyof typeof errors
    ) => {
        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: undefined,
            }));
        }
    };

    return (
        <div
            className="
                overflow-hidden
                rounded-4xl
                border
                border-neutral-200
                bg-white
                shadow-sm
            "
        >
            {/* Header */}

            <div className="border-b border-neutral-200 p-8">

                <p
                    className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-orange-500
                    "
                >
                    Request For Quote
                </p>

                <h3
                    className="
                        mt-3
                        text-3xl
                        font-bold
                        leading-tight
                    "
                >
                    Need this part?
                </h3>

                <p
                    className="
                        mt-3
                        text-neutral-600
                    "
                >
                    Submit your requirement and our
                    marine spare parts team will
                    respond with availability,
                    pricing, and lead time.
                </p>

            </div>

            {/* Product */}

            <div className="border-b border-neutral-200 p-8">

                <p
                    className="
                        text-xs
                        font-medium
                        uppercase
                        tracking-wider
                        text-neutral-500
                    "
                >
                    Selected Product
                </p>

                <div
                    className="
                        mt-3
                        rounded-2xl
                        bg-neutral-100
                        p-4
                    "
                >
                    <p className="font-semibold">
                        {product.title}
                    </p>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-neutral-500
                        "
                    >
                        {product.engineModel ? (
                            <>
                                {product.engineModel.brand.name}
                                {" • "}
                                {product.engineModel?.name}
                            </>
                        ) : (
                            <>
                                {product.machineryBrand?.name}
                                {" • "}
                                {product.machineryModel?.name}
                            </>
                        )}
                    </p>
                </div>

                <input
                    type="hidden"
                    name="product"
                    value={product.title}
                />

            </div>

            {/* Form */}

            <form
                onSubmit={handleSubmit}
                className="p-8"
                noValidate
            >
                <div className="grid gap-4">

                    {/* Name */}

                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                clearError("name");
                            }}
                            placeholder="Full Name *"
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
                            <p className="mt-1.5 text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email + Phone */}

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    clearError("email");
                                }}
                                placeholder="Email Address *"
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
                                <p className="mt-1.5 text-sm text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                    clearError("phone");
                                }}
                                placeholder="Phone / WhatsApp"
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
                                <p className="mt-1.5 text-sm text-red-500">
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                    </div>

                    {/* Company */}

                    <input
                        type="text"
                        value={company}
                        onChange={(e) =>
                            setCompany(e.target.value)
                        }
                        placeholder="Company Name"
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

                    {/* Country + Quantity */}

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        <input
                            type="text"
                            value={country}
                            onChange={(e) =>
                                setCountry(e.target.value)
                            }
                            placeholder="Country"
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

                        <div>
                            <input
                                type="number"
                                min="1"
                                step="1"
                                value={quantity}
                                onChange={(e) => {
                                    setQuantity(
                                        e.target.value
                                    );
                                    clearError("quantity");
                                }}
                                placeholder="Required Quantity *"
                                className={`
                                    w-full
                                    rounded-2xl
                                    border
                                    px-5
                                    py-4
                                    outline-none
                                    transition
                                    ${
                                        errors.quantity
                                            ? "border-red-400 focus:border-red-500"
                                            : "border-neutral-200 focus:border-orange-400"
                                    }
                                `}
                            />

                            {errors.quantity && (
                                <p className="mt-1.5 text-sm text-red-500">
                                    {errors.quantity}
                                </p>
                            )}
                        </div>

                    </div>

                    {/* Message */}

                    <div>
                        <textarea
                            rows={6}
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                clearError("message");
                            }}
                            placeholder="
                                Tell us your requirement,
                                vessel details, IMO number,
                                part number, urgency,
                                condition required (genuine/reconditioned),
                                etc.
                            "
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
                            <p className="mt-1.5 text-sm text-red-500">
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
                            flex
                            items-center
                            justify-center
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
                            ? "Sending Request..."
                            : "Request Quote"}
                    </button>

                    {/* Success */}

                    {success && (
                        <p className="text-sm text-green-600">
                            Your inquiry has been sent successfully.
                            Our team will get back to you shortly.
                        </p>
                    )}

                    {/* Error */}

                    {error && (
                        <p className="text-sm text-red-600">
                            {error}
                        </p>
                    )}

                </div>
            </form>

            {/* Footer */}

            <div
                className="
                    border-t
                    border-neutral-200
                    bg-neutral-50
                    px-8
                    py-5
                    text-sm
                    text-neutral-500
                "
            >
                Fast RFQ response • Global shipping • Genuine &
                Reconditioned Marine Parts
            </div>

        </div>
    );
}