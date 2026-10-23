/** Presentation guidance from the already-separated Proof of work section. */
export function proofGuidance(body = "") {
  const paragraphs = body.replace(/<!--[^]*?-->/g, "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const example = paragraphs.find((p) => /^For example\s*:/i.test(p));
  const clean = (text: string) => text.replace(/\*\*/g, "").replace(/\n/g, " ").trim();
  return {
    instruction: clean(paragraphs.find((p) => !/^For example\s*:/i.test(p)) ?? "Describe the useful result you created and how you will use it in your work."),
    placeholder: example ? clean(example.replace(/^For example\s*:\s*/i, "")).replace(/^["“]|["”]$/g, "") : "I built a… It helps my team…",
  };
}