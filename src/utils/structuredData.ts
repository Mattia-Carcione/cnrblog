import { INSTA_SITE, TIKTOK_SITE, MAIL } from "../consts";

interface WebPageStructuredDataOptions {
    description: string;
    canonicalURL: string;
    contentUrl?: string;
    imageDescription?: string;
    type?: "WebPage" | "Article" | "BlogPosting"; // estendibile
}

interface ItemListEntry {
  name: string;
  url: string;
  description?: string;
}

export function getItemListStructuredData(items: ItemListEntry[]): string {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };

  return JSON.stringify(structuredData);
}

export function getWebPageStructuredData({description, canonicalURL, contentUrl, imageDescription, type = "WebPage",}: WebPageStructuredDataOptions): string {
    const structuredData: any = {
        "@context": "https://schema.org",
        "@type": type,
        "name": "Blog di Anna",
        "description": description,
        "url": canonicalURL,
    };

    if (contentUrl && imageDescription) {
        structuredData.mainEntity = {
            "@type": "ImageObject",
            contentUrl,
            description: imageDescription,
        };
    }

    return JSON.stringify(structuredData);
}

export function getOrganizationStructuredData(name: string, siteUrl: string, logoUrl: string): string {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name,
        "email": `mailto:${MAIL}`,
        url: siteUrl,
        logo: {
            "@type": "ImageObject",
            url: logoUrl,
        },
        sameAs: [INSTA_SITE, TIKTOK_SITE],
    };

    return JSON.stringify(structuredData);
}
