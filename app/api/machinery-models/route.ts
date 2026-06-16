// app/api/machinery-models/route.ts

import { NextResponse } from "next/server";
import { getMachineryModelsByBrand } from "@/sanity/lib/getMachineryModelsByBrand";

export async function GET(
    request: Request
) {
    const { searchParams } =
        new URL(request.url);

    const brandId =
        searchParams.get("brandId");

    if (!brandId) {
        return NextResponse.json(
            {
                error: "Brand ID required",
            },
            {
                status: 400,
            }
        );
    }

    const models =
        await getMachineryModelsByBrand(
            brandId
        );

    return NextResponse.json(
        models
    );
}