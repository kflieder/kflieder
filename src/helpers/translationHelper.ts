import { DeepLClient } from "deepl-node";
import { client } from "@/sanity/lib/client";
import * as deepl from "deepl-node";

const deeplKey = new DeepLClient(process.env.DEEPL_API_KEY!);

export async function translatePostIfNeeded(post: any, targetLang: string) {

    post.translations = post.translations || [];

    const existing = post.translations.find((t: any) => t.language === targetLang);
    if (existing) {
        return existing.text; // Translation already exists
    }

    const translatedTitle = await deeplKey.translateText(post.title, null, targetLang as deepl.TargetLanguageCode);
    const translatedBody = await deeplKey.translateText(post.body, null, targetLang as deepl.TargetLanguageCode);

    const tanslation = {
        language: targetLang,
        text: {
            title: (translatedTitle as deepl.TextResult).text,
            body: (translatedBody as deepl.TextResult).text
        }
    };

    const patch = client.patch(post._id).setIfMissing({ translations: [] }).append('translations', [tanslation]);
    await patch.commit();


    return tanslation.text;

}