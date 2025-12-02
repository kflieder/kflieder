import { DeepLClient } from "deepl-node";
import { writeClient as client } from "@/sanity/lib/client";
import * as deepl from "deepl-node";

const deeplKey = new DeepLClient(process.env.DEEPL_API_KEY!);

export async function translatePostIfNeeded(post: any, targetLang: string) {
  console.log(
    "🔹 Checking DeepL key:",
    process.env.DEEPL_API_KEY ? "Loaded" : "Missing"
  );

  post.translations = post.translations || [];

  const existing = post.translations.find(
    (t: any) => t.language === targetLang
  );
  if (existing) {
    return existing.text; // Translation already exists
  }

  // function extractPlainText(blocks: any[]) {
  //     return blocks
  //         .map((block) => block.children?.map((child: any) => child.text).join("") || "")
  //         .join("\n");
  // }

  // const plainBody = extractPlainText(post.body);
  console.log("🔹 Attempting to call DeepL...");

async function translateBlocks(blocks: any[], targetLang: string) {
  const language = targetLang === "en" ? "en-US" : targetLang;

  const translatedBlocks = await Promise.all(
    blocks.map(async (block) => {
      if (!block.children) return block;

      // Filter non-empty text spans to translate
      const nonEmptyChildren = block.children.filter(
        (child: any) => child.text && child.text.trim() !== ""
      );

      if (nonEmptyChildren.length === 0) return block; // keep empty block as-is

      // Join texts with a separator
      const textToTranslate = nonEmptyChildren.map((c: any) => c.text).join("|||");

      const translatedText = await deeplKey.translateText(
        textToTranslate,
        null,
        language as deepl.TargetLanguageCode
      );

      // Split translated text back
      const translatedStrings = (translatedText as deepl.TextResult).text.split("|||");

      let index = 0;
      const translatedChildren = block.children.map((child: any) => {
        if (!child.text || !child.text.trim()) return child; // preserve empty spans
        return {
          ...child,
          text: translatedStrings[index++] || child.text,
        };
      });

      return { ...block, children: translatedChildren };
    })
  );

  return translatedBlocks;
}





  try {
    const language = targetLang === "en" ? "en-US" : targetLang;
    const translatedTitle = await deeplKey.translateText(
      post.title,
      null,
      language as deepl.TargetLanguageCode
    );
    const translatedBody = await translateBlocks(post.body, targetLang);

    const translation = {
      _key: `${targetLang}-${Date.now()}`,
      language: targetLang,
      text: {
        title: (translatedTitle as deepl.TextResult).text,
        body: translatedBody,
      },
    };

    const patch = client
      .patch(post._id)
      .setIfMissing({ translations: [] })
      .append("translations", [translation]);
    await patch.commit();

    return translation.text;
  } catch (error) {
    console.error("❌ DeepL translation error:", error);
    throw error;
  }
}
