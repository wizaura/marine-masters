import { NextResponse } from "next/server";
import { getModelsByBrand } from "@/sanity/lib/getModelsByBrand";

export async function GET(
    request: Request
) {
    const { searchParams } =
        new URL(request.url);

    const brandId =
        searchParams.get("brandId");

    const models =
        await getModelsByBrand(
            brandId!
        );

    return NextResponse.json(models);
}