import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bottom-0 left-0 fixed'>
        <div>
            <h2>FOLLOW US</h2>
            <Link href={"https://www.facebook.com/instapostph"}>FACEBOOK</Link>
            <Link href={"https://www.instagram.com/instapostph/"}>INSTAGRAM</Link>
        </div>
        <div>
            <h2>PERONALITY</h2>
            <Link href={"https://www.facebook.com/instapostph"}>FACEBOOK</Link>
            <Link href={"https://www.instagram.com/instapostph/"}>INSTAGRAM</Link>
        </div>
        <div>
            <h2>SOCIAL MEDIA</h2>
            <Link href={"https://www.facebook.com/instapostph"}>FACEBOOK</Link>
            <Link href={"https://www.instagram.com/instapostph/"}>INSTAGRAM</Link>
        </div>
    </footer>
  )
}

export default Footer