'use client'
import Link from 'next/link';

type Props = {
  href: string;
  icon: React.ReactNode;
  badge?: string;
  className?: string;
};

const UserActionIcon = ({ href, icon, badge, className = '' }: Props) => (
  <Link href={href} className={`relative text-white hover:text-pink-300 transition-colors ${className}`}>
    {icon}
    {badge && (
      <span className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-pink-500 text-xs text-white font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {badge}
      </span>
    )}
  </Link>
);

export default UserActionIcon;
