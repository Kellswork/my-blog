import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="logo">AgirlCodes</div>
        <div>
            <ul>
                <li>Home</li>
                <li>portfolio</li>
                <li>Subscribe</li>
            </ul>
        </div>
      </nav>
      <style jsx>{`
  ul {
    list-style: none;
  }
  `}
  </style>
    </>
  );
  
}
