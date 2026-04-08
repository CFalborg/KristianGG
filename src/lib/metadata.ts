import type { Metadata } from "next";
import { SITE_URL, BUSINESS } from "./constants";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function createMetadata({ title, description, path, ogImage }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || "/og-default.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.fullName,
      locale: "da_DK",
      type: "website",
      images: [
        {
          url: `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${image}`],
    },
  };
}
