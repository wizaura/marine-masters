import { client } from "./client";

export async function getPartTypesByEngineModel(
    modelSlug: string,
    search = ""
) {
    return client.fetch(
        `
        array::unique(
            *[
                _type == "product" &&
                engineModel->slug.current == $modelSlug &&
                (
                    $search == "" ||
                    partType->title match "*" + $search + "*" ||
                    title match "*" + $search + "*"
                )
            ].partType->{
                _id,
                title,
                slug,
                image,
                description
            }
        )
        `,
        {
            modelSlug,
            search,
        }
    );
}