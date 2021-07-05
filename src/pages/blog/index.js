import React from "react";
import { MOCK_BLOG_SEO_METADATA } from "src/utils/mocks/seo-metadata";
import BasePage from "src/components/layouts/BasePage";

import OpenModalButton from "src/components/modules/Modals/Base/OpenModalButton";
import ExampleModal2 from "src/components/modules/Modals/ExampleModal2";

{/* <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
  <a>{post.title}</a>
</Link>; */}

export default function Blog() {
  return (
    <BasePage showNav showFooter metadata={MOCK_BLOG_SEO_METADATA}>
      <h1>I am the blog page</h1>
      <OpenModalButton />
      <ExampleModal2/>
    </BasePage>
  );
}
