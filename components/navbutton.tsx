import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => (
  <li>
    <Link
      href={href}
      className="block py-2 px-4 text-white hover:bg-white hover:bg-opacity-15 rounded-md transition-colors"
    >
      {label}
    </Link>
  </li>
);

export default NavItem;
