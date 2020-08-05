import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src="/blogo.png" alt="logo" />
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Subscribe</li>
          </ul>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-around;
            font-family: 'Fira Sans', sans-serif;
           

            align-items: center;
          }
          .logo {
            width: 50%;
            text-align: center;
          }
          img {
            width: 120px;
          }
          .menu {
            width: 50%;
            display: flex;
            justify-content: center;
          }
          ul {
            list-style: none;
            display: flex;
            width: 50%;
            padding-bottom: 10px;
            justify-content: space-evenly;
          }
        `}
      </style>
    </>
  );
}
