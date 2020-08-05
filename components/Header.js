import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
  return (
    <>
      <header className="header">
        <Nav />
        <div className='header-card'>
          <div className='card-image'>
            <img src='/blog-image.jpg' alt='blog image'/>
          </div>
          <div className='card-icons'>
            <img src='/linkedin.svg' alt='linkedin icon'/>
            <img src='/github.svg' alt='github icon'/>
            <img src='/twitter.svg' alt='twitter icon'/>
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
       .card-image img {
         width: 120px;
       }

      `}</style>
    </>
  )
}

