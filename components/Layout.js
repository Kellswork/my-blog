import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <div className="layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Oxygen:wght@300;400&display=swap" rel="stylesheet"></link>
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
