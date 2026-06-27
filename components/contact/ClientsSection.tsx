"use client";

import { useState } from "react";

export default function ContactRFQSection() {

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

    const [productRequired, setProductRequired] =
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
                            productRequired,
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
            setProductRequired("");
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

                    {/* Left */}
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

                        </div>

                        <div className="mt-8 space-y-6">

                            <div>
                                <p className="text-sm uppercase tracking-wider text-orange-400">
                                    Email
                                </p>

                                <p className="mt-2 text-xl font-medium text-white">
                                    marinemastersworldwide@outlook.com
                                </p>
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-wider text-orange-400">
                                    Locations
                                </p>

                                <p className="mt-2 text-xl font-medium text-white">
                                    Kochi • Dubai • Singapore
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right */}
                    <div
                        className="
                            bg-white
                            p-8
                            md:p-12
                        "
                    >

                        <form onSubmit={handleSubmit} className="grid gap-5">

                            <div>

                                <label className="mb-2 block text-sm font-semibold">
                                    Full Name *
                                </label>

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    placeholder="Your Name"
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

                                <label className="mb-2 block text-sm font-semibold">
                                    Company *
                                </label>

                                <input
                                    type="text"
                                    value={company}
                                    onChange={(e) =>
                                        setCompany(e.target.value)
                                    }
                                    placeholder="Your Company"
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

                            <div className="grid gap-5 md:grid-cols-2">

                                <div>

                                    <label className="mb-2 block text-sm font-semibold">
                                        Email *
                                    </label>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="youremail@example.com"
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

                                    <label className="mb-2 block text-sm font-semibold">
                                        Phone
                                    </label>

                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        placeholder="+1 000 000 0000"
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

                            <div className="grid gap-5 md:grid-cols-2">

                                <div>

                                    <label className="mb-2 block text-sm font-semibold">
                                        Country
                                    </label>

                                    <input
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

                                    <label className="mb-2 block text-sm font-semibold">
                                        Quantity
                                    </label>

                                    <input
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

                            <div>

                                <label className="mb-2 block text-sm font-semibold">
                                    Part / Product Required
                                </label>

                                <input
                                    type="text"
                                    value={productRequired}
                                    onChange={(e) =>
                                        setProductRequired(e.target.value)
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

                            <div>

                                <label className="mb-2 block text-sm font-semibold">
                                    Message *
                                </label>

                                <textarea
                                    rows={6}
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(e.target.value)
                                    }
                                    placeholder="Tell us your requirement, vessel details, engine model, part number, urgency, destination port, etc."
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
                                "
                            >
                                {loading
                                    ? "Sending..."
                                    : "Send Inquiry"}
                            </button>

                            {success && (
                                <p className="text-green-600">
                                    Thank you. Your enquiry has
                                    been submitted successfully.
                                </p>
                            )}

                            {error && (
                                <p className="text-red-600">
                                    {error}
                                </p>
                            )}

                        </form>

                    </div>

                </div>

            </div>

        </section >
    );
}