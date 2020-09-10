import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header className="header">
        <Nav />
        <div className="header-card">
          <div className="card-image">
            <img src="/blog-image.jpg" alt="blog image" />
          </div>
          <div className="card-icons">
            <img src="/linkedin.svg" alt="linkedin icon" />
            <img src="/github.svg" alt="github icon" />
            <img src="/twitter.svg" alt="twitter icon" />
          </div>
          <div className="card-info">
            <span>
              Welcome to my little corner of the web where I share info on
              frontend techies...
            </span>
          </div>
        </div>
      </header>
      <style jsx>{`
        .header-card {
          max-width: 600px;
          width: 100%;
          height: 90px;
          background: #eee;
          position: relative;
          display: flex;
          margin: 0 auto;
          align-items: center;
          margin-top: 18px;
        }
        card-image {
          margin-right: 10px;
        }
        .card-image img {
          width: 120px;
          bottom: -20px;
          border-radius: 10px;
        }
        .card-icons {
          display: flex;
        }
        .card-info {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}
