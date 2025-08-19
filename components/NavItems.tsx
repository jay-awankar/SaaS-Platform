'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    {label:'Home', href:'/'},
    {label:'Companions', href:'/companions'},
    {label:'My Journey', href:'/my-journey'},
]

const NavItems = () => {
    
    const pathname = usePathname()

  return (
    <nav className="flex items-center min-md:gap-10 gap-4">
      {navItems.map(({label, href}) => (
        <Link 
            href={href} 
            key={label} 
            className={cn(pathname === href && 'text-primary font-semibold', 'nav-items')}>
            <div className="flex gap-2 items-center justify-center">
              <Image
                src={`/icons/${label}.svg`}
                alt={label}
                width={40}
                height={40}
                className={`rounded-full  bg-[#F5E6FE] border-none`}
              />
              <span className="hidden sm:hidden md:block">

              {label}
              </span>
            </div>
        </Link>
      ))}
    </nav>
  )
}

export default NavItems
