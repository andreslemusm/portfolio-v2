import Document, { Html, Head, Main, NextScript } from "next/document";
import brandIcon from "@assets/brand-icon.svg";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/svg" href="/favicon.svg" />
        </Head>
        <body className="bg-gray-800 font-sans text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
