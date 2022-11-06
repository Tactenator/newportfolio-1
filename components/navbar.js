import Link from 'next/link';

const Navbar = () => {
    return ( 
        <div>
            <nav id="desktop-nav" class="hidden bg-[#0a192f] justify-end text-slate-200 p-6 text-2xl gap-11 fixed mx-auto inset-x-0 sm:flex">
                <Link href="#welcome"><a>Welcome</a></Link>
                <Link href="#about"><a>About</a></Link>
                <Link href="#projects"><a>Projects</a></Link>
                <Link href="#workedfor"><a>Past Work</a></Link>
                <Link href="#contact"><a>Contact</a></Link>
            </nav>
        </div>
     );
}
 
export default Navbar;