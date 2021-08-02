import Head from "next/head";
import { Fragment } from "react";

const Blog = () => (
  <Fragment>
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Blog | Andres Lemus</title>
      <meta name="title" content="Blog | Andres Lemus" />
      <meta name="description" content="Search Andres Lemus blog posts" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://andreslemus.dev/blog" />
      <meta property="og:title" content="Blog | Andres Lemus" />
      <meta
        property="og:description"
        content="Search Andres Lemus blog posts"
      />
      <meta property="og:image" content="/preview.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://andreslemus.dev/blog" />
      <meta property="twitter:title" content="Blog | Andres Lemus" />
      <meta
        property="twitter:description"
        content="Search Andres Lemus blog posts"
      />
      <meta property="twitter:image" content="/preview.png" />
    </Head>
    <h1 className="text-7xl font-bold uppercase text-center text-green-300">
      Blog
    </h1>
  </Fragment>
);

export default Blog;
