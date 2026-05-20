// utils/extractHeadings.ts

export interface TocItem {
    id: string;
    name: string;
  }
  
  // Converts heading text to a valid HTML id
  // Example: "What is AI?" → "what-is-ai"
  function textToId(text: string): string {
    return text
      .toLowerCase()
      .replace(/<[^>]+>/g, "")    // remove any inner HTML tags
      .replace(/[^a-z0-9\s-]/g, "") // remove special characters like ?, !, :
      .replace(/\s+/g, "-")         // spaces → dashes
      .replace(/-+/g, "-")          // multiple dashes → single dash
      .trim();
  }
  
  // ─────────────────────────────────────────────
  // 1. Extracts all h2 headings from HTML string
  //    Returns array of { id, name } for sidebar TOC
  // ─────────────────────────────────────────────
  export function extractH2Headings(htmlContent: string): TocItem[] {
    // Match all <h2>...</h2> tags including multiline
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
    const matches = [...htmlContent.matchAll(h2Regex)];
  
    return matches.map((match) => {
      // Remove inner tags like <strong>, <span> to get plain text
      const rawText = match[1].replace(/<[^>]+>/g, "").trim();
      const id = textToId(rawText);
      return { id, name: rawText };
    });
  }
  
  // ─────────────────────────────────────────────
  // 2. Injects id attributes into each h2 in HTML
  //    So that anchor links like href="#my-heading" work
  // ─────────────────────────────────────────────
  export function injectH2Ids(htmlContent: string): string {
    const h2Regex = /<h2([^>]*)>(.*?)<\/h2>/gi;
  
    return htmlContent.replace(h2Regex, (match, attrs, innerContent) => {
      // Don't add id if one already exists
      if (attrs.includes("id=")) return match;
  
      // Get plain text to generate the id
      const rawText = innerContent.replace(/<[^>]+>/g, "").trim();
      const id = textToId(rawText);
  
      // Return the h2 with the new id injected
      return `<h2${attrs} id="${id}">${innerContent}</h2>`;
    });
  }