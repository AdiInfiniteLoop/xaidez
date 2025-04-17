import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItemProps {
  href: string;
  label: string;
  icon?: ReactNode;
}

const NavItem = ({ href, label, icon }: NavItemProps) => (
  <li className="group relative inline-block">
    <Link
      href={href}
      className="relative px-5 py-2 text-base font-medium tracking-wide text-gray-200 transition-all duration-300 ease-in-out flex items-center rounded-md hover:bg-gray-800/50"
    >
      {icon && <span className="mr-1 text-xaidez-accent group-hover:text-xaidez-accent transition-colors">{icon}</span>}
      
      <span className="relative z-10 group-hover:text-xaidez-accent transition-colors duration-300">
        {label}
      </span>
      
      <span className="absolute inset-0 bg-gradient-to-r from-xaidez-accent/10 to-blue-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out -z-10" />
      
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-xaidez-accent to-xaidez-error group-hover:w-full transition-all duration-300 ease-out" />
    </Link>
  </li>
);

export default NavItem;