import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">404 ERROR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Page <span className="text-xaidez-accent">Not Found</span>
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="max-w-4xl border border-xaidez-dark mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-gray-700 mb-8 text-center">
            We&apos;re sorry, but the page you requested could not be found. Please check the URL for mistakes or return to the homepage.
          </p>

          <div className="flex justify-center">
            <Link href="/">
              <button className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </button>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Need help? <Link href="/contact" className="text-xaidez-accent hover:underline">Contact Support</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
