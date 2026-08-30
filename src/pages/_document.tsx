import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ml" className="scroll-smooth">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/png" href="/assisi_assets/Assisi-Renewal-Center-150x150.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Gayathri:wght@400;700&family=Manjari:wght@400;700&family=Noto+Sans+Malayalam:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white text-[#1A202C] antialiased selection:bg-[#7A1C1C] selection:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
