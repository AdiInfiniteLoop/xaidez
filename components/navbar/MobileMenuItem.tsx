'use client'
import Link from 'next/link';

type Props = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const MobileMenuItem = ({ href, label, icon, onClick }: Props) => (
  <li>
    <Link
      href={href}
      className="flex items-center px-3 py-3 text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white rounded-md transition-colors"
      onClick={onClick}
    >
      {icon && <span className="mr-2 text-xaidez-accent">{icon}</span>}
      {label}
    </Link>
  </li>
);

export default MobileMenuItem;
