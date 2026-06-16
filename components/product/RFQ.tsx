"use client";

import { useState } from "react";

export default function ProductRFQ({
    product,
}: {
    product: any;
}) {

    const [name, setName] =
        useState("");

    const [company, setCompany] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [phone, setPhone] =
        useState("");

    const [country, setCountry] =
        useState("");

    const [quantity, setQuantity] =
        useState("");

    const [message, setMessage] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [success, setSuccess] =
        useState(false);

    const [error, setError] =
        useState("");

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const response =
                await fetch(
                    "/api/contact",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            name,
                            company,
                            email,
                            phone,
                            country,
                            quantity,
                            productRequired: product.title,
                            message,
                        }),
                    }
                );

            if (!response.ok) {
                throw new Error(
                    "Failed to send enquiry"
                );
            }

            setSuccess(true);

            setName("");
            setCompany("");
            setEmail("");
            setPhone("");
            setCountry("");
            setQuantity("");
            setMessage("");
        } catch (err) {
            setError(
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
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
            >
                <div className="grid gap-4">

                    <input
                        type="text"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        placeholder="Full Name *"
                        required
                        className="
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

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Email Address *"
                            required
                            className="
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

                        <input
                            type="text"
                            value={phone}
                            onChange={(e) =>
                                setPhone(e.target.value)
                            }
                            placeholder="Phone / WhatsApp"
                            className="
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

                    <input
                        type="text"
                        value={company}
                        onChange={(e) =>
                            setCompany(e.target.value)
                        }
                        placeholder="Company Name"
                        className="
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

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            type="text"
                            value={country}
                            onChange={(e) =>
                                setCountry(e.target.value)
                            }
                            placeholder="Country"
                            className="
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

                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) =>
                                setQuantity(e.target.value)
                            }
                            placeholder="Required Quantity"
                            className="
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

                    <textarea
                        rows={6}
                        value={message}
                        onChange={(e) =>
                            setMessage(e.target.value)
                        }
                        placeholder="
                Tell us your requirement,
                vessel details, IMO number,
                part number, urgency,
                condition required (genuine/reconditioned),
                etc.
            "
                        className="
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

                    {success && (
                        <p className="text-sm text-green-600">
                            Your inquiry has been sent successfully.
                            Our team will get back to you shortly.
                        </p>
                    )}

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