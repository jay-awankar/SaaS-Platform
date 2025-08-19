import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="navbar gap-8">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
            <Image 
                src="/images/logo.svg"
                alt="Logo"
                width={200}
                height={44}
                className="max-sm:w-30"
            />
        </div>
      </Link>
      <div className="flex items-center gap-5 lg:gap-8">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
