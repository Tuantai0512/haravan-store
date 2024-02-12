export const getIdFromSlug = (slug: string) => {
    const words = slug.split('.html');

    const slugWithoutHtml = words[0];

    const id = slugWithoutHtml.slice(-36);

    return id;
}