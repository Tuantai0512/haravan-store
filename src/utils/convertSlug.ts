import slugify from "slugify";

export const convertSlug = (str: string) => {
    if(!str) return "";

    str = slugify(str, {
        lower: true,      // convert to lower case, defaults to `false`
        locale: 'vi',      // language code of the locale to use    
    });

    return str
}