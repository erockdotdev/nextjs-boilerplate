import Head from "next/head";

export interface MetadataProps {
  description?: string;
  image?: string;
  robots?: string;
  title: string;
  url?: string;
}

/**
 * The following set up is based on the standard template found here
 * https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags
 */
export default function Metadata(metadata: MetadataProps) {
  const { title, description, url, image, robots } = metadata;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      {/* open graph  */}
      <meta property="og:title" content={title} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:description" content={description} />
      {/* Crawlers Instructions */}
      {robots && <meta name="robots" content={robots} />}
    </Head>
  );
}
