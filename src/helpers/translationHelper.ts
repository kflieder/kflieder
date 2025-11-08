import { DeepLClient } from "deepl-node";
import { writeClient as client } from "@/sanity/lib/client";
import * as deepl from "deepl-node";

const deeplKey = new DeepLClient(process.env.DEEPL_API_KEY!);

export async function translatePostIfNeeded(post: any, targetLang: string) {
    console.log("🔹 Checking DeepL key:", process.env.DEEPL_API_KEY ? "Loaded" : "Missing");

    post.translations = post.translations || [];

    const existing = post.translations.find((t: any) => t.language === targetLang);
    if (existing) {
        return existing.text; // Translation already exists
    }

    function extractPlainText(blocks: any[]) {
        return blocks
            .map((block) => block.children?.map((child: any) => child.text).join("") || "")
            .join("\n");
    }

    const plainBody = extractPlainText(post.body);
    console.log("🔹 Attempting to call DeepL...");

    try {
    const language = targetLang === "en" ? "en-US" : targetLang;
    const translatedTitle = await deeplKey.translateText(post.title, null, language as deepl.TargetLanguageCode);
    const translatedBody = await deeplKey.translateText(plainBody, null, language as deepl.TargetLanguageCode);
   

    const translation = {
        _key: `${targetLang}-${Date.now()}`,
        language: targetLang,
        text: {
            title: (translatedTitle as deepl.TextResult).text,
            body: (translatedBody as deepl.TextResult).text
        }
    };

    const patch = client.patch(post._id).setIfMissing({ translations: [] }).append('translations', [translation]);
    await patch.commit();


    return translation.text;
     } catch (error) {
        console.error("❌ DeepL translation error:", error);
        throw error;
    }

}