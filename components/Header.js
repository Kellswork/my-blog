import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
  return (
    <>
      <header className="header">
        <Nav />
        <div className='header-card'>
          <div className='card-image'>
            <img />
          </div>
          <div className='card-info'></div>
        </div>
      </header>
      <style jsx>{`
       .header-card {
        max-width: 600px;
        width: 100%;
        height: 100px;
        background: pink; 
       }
      `}</style>
    </>
  )
}

