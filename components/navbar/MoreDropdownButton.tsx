import Link from 'next/link'

const MoreDropdownButton = () => (
  <li className="relative group">
    {/* Trigger Button */}
    <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold uppercase tracking-wider relative transition-all duration-300 hover:text-xaidez-accent">
      More
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>

      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-xaidez-accent transition-all duration-300 group-hover:w-full" />
    </button>

    <div className="absolute top-full right-0 mt-3 w-60 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transition-all duration-300 origin-top-right z-50">
      <ul className="py-2 space-y-1">
        {[
          { label: 'Certificates', href: '/certificates' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Disclaimer', href: '/disclaimer' },
          { label: 'Terms & Conditions', href: '/terms-conditions' },
          { label: 'Refund Policy', href: '/refund-policy' },
          { label: 'Shipping Policy', href: '/shipping-policy' },
        ].map((item, i) => (
          <li
            key={item.href}
            className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[calc(60ms_*_var(--i))]"
            style={{ ['--i' as any]: i }}
          >
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-xaidez-accent/10 hover:text-xaidez-accent transition-colors rounded-md"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </li>
)

export default MoreDropdownButton
