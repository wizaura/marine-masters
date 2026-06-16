import Hero from "@/components/blogs/Hero";

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
};

export default async function BlogsPage({
    searchParams,
}: Props) {
    const { page } =
        await searchParams;

    return (
        <Hero
            page={
                Number(page || 1)
            }
        />
    );
}