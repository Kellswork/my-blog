import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <div class="layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <section className="layout">
        <div className="content">{children}</div>
      </section>
      <footer>Built by me!</footer>
      <style jsx global>
        {`
          div.layout {
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            border: 2px solid
          }
        `}
      </style>
    </div>
  );
}
