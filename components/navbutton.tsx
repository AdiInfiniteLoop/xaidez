import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => (
  <li className="group relative inline-block">
    <Link
      href={href}
      className="relative px-6 py-3 text-[16px] uppercase font-bold tracking-wider text-white transition-all duration-300 ease-in-out group-hover:scale-105"
    >
      <span className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-xaidez-accent blur-sm opacity-50 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />

      <span className="absolute inset-0 bg-xaidez-accent/20 rounded-md transform scale-[0.95] translate-y-1 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out -z-10" />

      <span className="relative z-10 group-hover:text-xaidez-accent transition-colors duration-300">
        {label}
      </span>
    </Link>
  </li>
);


export default NavItem;
