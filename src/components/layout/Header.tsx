import Link from "next/link"
import Image from "next/image"
import SearchIcon from "@/components/ui/SearchIcon"
import ArrowIcon from "@/components/ui/ArrowIcon"


export function Header() {
  return (
    <header className="flex items-stretch h-16 relative z-50 border-t-[5px] border-blue">

      {/* Logo Section */}
      <div className="flex items-center px-6 ">
        <div className="flex items-center">

          {/* <div className="relative w-8 h-8 rounded-full border-2 border-white flex items-center justify-center bg-white overflow-hidden">
            <div className="w-5 h-5 rounded-full border-[3px] border-blue bg-red"></div>
          </div> */}

          <div className="flex flex-col min-w-fit p-6 bg-blue rounded-b-lg">
            {/* RAF Logo */}
            <Image
              src="/assets/brand/raf-logo-white.svg"
              alt="RAF logo"
              width={100}
              height={44}
              priority
            />
          </div>
          {/* Cadets Tab */}
          <div className="flex items-center text-blue font-medium opacity-40 text-sm px-6 py-5 bg-white rounded-br-lg hover:opacity-80 transition-opacity duration-500 ease-in-out">
            Cadets
          </div>
        </div>
      </div>



      {/* Navigation */}
      <nav className="flex-1 flex items-center justify-end px-8 gap-8" aria-label="Main navigation">
        <NavLink href="#">What we do</NavLink>
        <NavLink href="#">Our organisation</NavLink>
        <NavLink href="#" active>
          Aircraft
        </NavLink>
        <NavLink href="#">Display teams</NavLink>
        <NavLink href="#">Community & Support</NavLink>
        <NavLink href="#">News</NavLink>
        <NavLink href="#"><SearchIcon /></NavLink>
        <NavLink href="#"><span className="pe-3">Join the RAF</span> <ArrowIcon width = '11' height = '7' className="absolute -rotate-40 -top-1 right-0" /></NavLink>
      </nav>
    </header>
  )
}

interface NavLinkProps {
  children: React.ReactNode
  href: string
  active?: boolean
}

function NavLink({ children, href, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative text-sm font-medium tracking-wide transition-colors ${
        active
          ? "text-white border-b-2 border-red pb-1"
          : "text-white opacity-80 transition-transform duration-300 ease-out hover:opacity-100 hover:-translate-y-0.5 focus:opacity-100 focus:outline-none"
      }`}
    >
      {children}
    </Link>
  )
}
