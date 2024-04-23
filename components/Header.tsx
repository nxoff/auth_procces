'use client'

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

import "@/styles/menu.css"

const Header = () => {
  return (
    <header className="menu">
      <h2><Link href='/' className="home-page-link">Kruczek Ko Kooo</Link></h2>
      <div>
        <UserButton />
        <Link href='/sign-in' className="menu-sign-button">Sign In</Link>
        <Link href='/sign-up' className="menu-sign-button">Sign Up</Link>
      </div>
    </header>
  )
}

export default Header
