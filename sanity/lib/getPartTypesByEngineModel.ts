import { client } from "./client";

export async function getPartTypesByEngineModel(
    modelSlug: string
) {
    return client.fetch(
        `
        array::unique(
            *[
                _type == "product" &&
                engineModel->slug.current == $modelSlug
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
        }
    );
}