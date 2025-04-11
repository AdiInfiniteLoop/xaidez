import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => (
  <li className="relative group inline-block">
    <Link
      href={href}
      className="relative inline-block p-6 text-white uppercase text-[17px] transition duration-500 ease-in-out cursor-pointer"
    >
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#ffc506] transition-all duration-500 ease-in-out group-hover:w-full" />
      <span className="absolute left-0 bottom-0 h-0 w-full bg-[#ffc506] transition-all duration-400 ease-in-out -z-10 group-hover:h-full group-hover:transition-delay-400" />
      <span className="relative z-10 group-hover:text-[#1e1e2b] transition-all delay-50">{label}</span>
    </Link>
  </li>
);

export default NavItem;
