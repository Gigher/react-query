import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul style={{ padding: "25px", display: "flex", alignItems: "center", justifyContent: "center", gap: "25px", backgroundColor: "#2b2d42", listStyle: "none" }}>
            <li><Link href="/">Posts</Link></li>
            <li><Link href="/cars">Cars</Link></li>
        </ul>  
    </nav>
  )
}

export default Navbar