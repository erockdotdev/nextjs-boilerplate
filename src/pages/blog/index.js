import React from "react";
import { MOCK_BLOG_SEO_METADATA } from "src/utils/mocks/SEOMetadata";
import BasePage from "src/components/layouts/BasePage";

{/* <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
  <a>{post.title}</a>
</Link>; */}

export default function Blog() {
  return (
    <BasePage showNav showFooter metadata={MOCK_BLOG_SEO_METADATA}>
      <h1>I am the blog page</h1>
    </BasePage>
  );
}
