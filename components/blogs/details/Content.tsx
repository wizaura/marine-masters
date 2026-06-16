import { PortableText } from "@portabletext/react";

type Props = {
    blog: any;
};

const components = {
    block: {
        h1: ({ children }: any) => (
            <h1
                className="
                    mt-12
                    text-4xl
                    font-bold
                    leading-tight
                    lg:text-5xl
                "
            >
                {children}
            </h1>
        ),

        h2: ({ children }: any) => (
            <h2
                className="
                    mt-12
                    text-3xl
                    font-bold
                    leading-tight
                    lg:text-4xl
                "
            >
                {children}
            </h2>
        ),

        h3: ({ children }: any) => (
            <h3
                className="
                    mt-10
                    text-2xl
                    font-bold
                "
            >
                {children}
            </h3>
        ),

        h4: ({ children }: any) => (
            <h4
                className="
                    mt-8
                    text-xl
                    font-semibold
                "
            >
                {children}
            </h4>
        ),

        normal: ({ children }: any) => (
            <p
                className="
                    mb-6
                    text-lg
                    leading-relaxed
                    text-neutral-700
                "
            >
                {children}
            </p>
        ),

        blockquote: ({
            children,
        }: any) => (
            <blockquote
                className="
                    my-10
                    border-l-4
                    border-orange-400
                    pl-6
                    text-xl
                    italic
                    text-neutral-600
                "
            >
                {children}
            </blockquote>
        ),
    },

    list: {
        bullet: ({
            children,
        }: any) => (
            <ul
                className="
                    mb-8
                    ml-6
                    list-disc
                    space-y-3
                    text-lg
                    text-neutral-700
                "
            >
                {children}
            </ul>
        ),

        number: ({
            children,
        }: any) => (
            <ol
                className="
                    mb-8
                    ml-6
                    list-decimal
                    space-y-3
                    text-lg
                    text-neutral-700
                "
            >
                {children}
            </ol>
        ),
    },

    listItem: {
        bullet: ({
            children,
        }: any) => (
            <li>{children}</li>
        ),

        number: ({
            children,
        }: any) => (
            <li>{children}</li>
        ),
    },

    marks: {
        strong: ({
            children,
        }: any) => (
            <strong
                className="
                    font-bold
                    text-black
                "
            >
                {children}
            </strong>
        ),

        em: ({
            children,
        }: any) => (
            <em>{children}</em>
        ),

        link: ({
            children,
            value,
        }: any) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    font-medium
                    text-orange-500
                    underline
                "
            >
                {children}
            </a>
        ),
    },
};

export default function BlogContent({
    blog,
}: Props) {
    return (
        <section
            className="
                relative
                z-30
                bg-white
            "
        >

            <div className="mx-auto max-w-8xl px-8 py-20">

                <div className="grid gap-12 md:grid-cols-[0.6fr_1.4fr]">

                    {/* Left */}

                    <div>
                        <p
                            className="
                                text-xl
                                md:text-2xl
                                font-medium
                                text-neutral-500
                            "
                        >
                            Article Content
                        </p>
                    </div>

                    {/* Right */}

                    <div>
                        <PortableText
                            value={blog.content}
                            components={components}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}