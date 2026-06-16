import { NextResponse } from "next/server";

import { getPartTypesByEngineModel } from "@/sanity/lib/getPartTypesByEngineModel";

export async function GET(
    request: Request
) {
    const { searchParams } =
        new URL(request.url);

    const modelSlug =
        searchParams.get("modelSlug");

    if (!modelSlug) {
        return NextResponse.json(
            {
                error: "Model slug required",
            },
            {
                status: 400,
            }
        );
    }

    const partTypes =
        await getPartTypesByEngineModel(
            modelSlug
        );

    return NextResponse.json(
        partTypes
    );
}