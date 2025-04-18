import Link from "next/link"
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  ShoppingBag,
  Gift,
  CreditCard,
  Heart,
  Youtube,
  Clock,
  ShoppingBagIcon,
  TruckIcon,
  GiftIcon,
} from "lucide-react"

import { SITE_INFO } from "@/config"
const policies = [
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "Disclaimer", link: "/disclaimer" },
  { label: "Shipping Policy", link: "/shipping-policy" },
  { label: "Refund Policy", link: "/refund-policy" },
  { label: "Terms & Conditions", link: "/terms-conditions" }
]

const quicklinks = [
{
  label: "About Us",
  link: "/about"
}, 
{
  label: "Contact Us",
  link:'/contact'
},
{
  label:"Products",
  link:"/products"
},
{
  label:"Gallery",
  link:"/photos"
},
{
  label:"Certificates",
  link:"/certificates"
}

]

export default function EcommerceFooter() {

  return (
    <div className="w-full bg-white">
      <section className="w-full bg-xaidez-dark py-16 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-xaidez-accent opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-xaidez-accent opacity-10 transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-xaidez-accent opacity-20 transform -translate-y-1/2"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left md:max-w-[60%]">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-xaidez-accent">
                  {SITE_INFO.slogan}
                </h2>
                <p className="max-w-[700px] text-xaidez-light md:text-xl">
                  Join thousands of satisfied customers and discover premium Kashmir products at unbeatable prices.
                </p>
              </div>
              <div className="space-x-4">
                <Link 
                  href={SITE_INFO.cta_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-xaidez-accent hover:bg-xaidez-hoveraccent text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Now
                </Link>
              <Link href='/products'>
                <button
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-xaidez-accent text-xaidez-accent hover:bg-[#f9e6d7] font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  View Products
                </button>
              </Link>
              </div>
            </div>

            <div className="relative w-full max-w-[300px] h-[200px] md:h-[250px]">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-xl flex items-center justify-center">
                <ShoppingBag size={80} className="text-xaidez-accent" />
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <Gift size={30} className="text-xaidez-accent" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <CreditCard size={24} className="text-xaidez-accent" />
              </div>
              <div
                className="absolute bottom-10 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                <Heart size={20} className="text-xaidez-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-white pt-12 pb-6 border-t relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-xaidez-accent to-transparent"></div>
        <div className="absolute -top-8 left-1/4 w-16 h-16 rounded-full bg-[#f9e6d7] opacity-70"></div>
        <div className="absolute top-1/3 right-0 w-32 h-32 rounded-full bg-[#f9e6d7] opacity-50 transform translate-x-1/2"></div>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-xaidez-accent flex items-center justify-center">
                    <ShoppingBag size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-xaidez-accent">{SITE_INFO.sitename}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <MapPin size={20} className="text-xaidez-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{SITE_INFO.address}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone size={20} className="text-xaidez-accent" />
                    <span className="text-gray-600">{SITE_INFO.mobile[0]}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Mail size={20} className="mt-1 text-xaidez-accent" />
                    <div className="flex flex-col text-gray-600 text-base">
                      <span>{SITE_INFO.email[0]}</span>
                      <span>{SITE_INFO.email[1]}</span>
                    </div>
                  </li>

                  <li className="flex items-center space-x-3">
                    <Clock size={20} className="text-xaidez-accent" />
                    <span className="text-gray-600">{SITE_INFO.timing[0]}</span>
                  </li>
                </ul>
              </div> 
              <div className="flex space-x-4">
                  <Link
                    href={SITE_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#f9e6d7] hover:scale-105 flex items-center justify-center transition-colors duration-300"
                  >
                    <Facebook size={20} className="text-xaidez-accent" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href={SITE_INFO.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#f9e6d7] hover:scale-105 flex items-center justify-center transition-colors duration-300"
                  >
                    <Twitter size={20} className="text-xaidez-accent" />
                    <span className="sr-only">X (Twitter)</span>
                  </Link>
                  <Link
                    href={SITE_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#f9e6d7] hover:scale-105 flex items-center justify-center transition-colors duration-300"
                  >
                    <Instagram size={20} className="text-xaidez-accent" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href={SITE_INFO.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#f9e6d7] hover:scale-105 flex items-center justify-center transition-colors duration-300"
                  >
                    <Youtube size={20} className="text-xaidez-accent" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>             
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <ShoppingBagIcon className="text-xaidez-accent"/>
                    <h3 className="text-xl font-bold text-xaidez-accent">Quick Links</h3>
                  </div>
                  <ul className="space-y-3 text-lg">
                    {quicklinks.map(
                      (item) => (
                        <li key={item.label}>
                          <Link
                            href={item.link}
                            className="text-gray-600 hover:text-xaidez-accent transition-colors duration-300 flex items-center group"
                          >
                            <ArrowRight
                              size={14}
                              className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                            />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <TruckIcon className="text-xaidez-accent"/>
                    <h3 className="text-xl font-bold text-xaidez-accent">Policies</h3>
                  </div>
                  <ul className="space-y-3 text-lg">
                    {policies.map(
                      (item) => (
                        <li key={item.label}>
                          <Link
                            href={item.link}
                            className="text-gray-600 hover:text-xaidez-accent transition-colors duration-300 flex items-center group"
                          >
                            <ArrowRight
                              size={14}
                              className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                            />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-[#f9e6d7] transition-colors duration-300">
                <CreditCard className="text-xaidez-accent"/>
                <h4 className="font-semibold text-xaidez-accent">Secure Payment</h4>
                <p className="text-base text-gray-500">Multiple payment options available</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-[#f9e6d7] transition-colors duration-300">
                <GiftIcon className="text-xaidez-accent"/>
                <h4 className="font-semibold text-xaidez-accent">Authentic Handicrafts</h4>
                <p className="text-base text-gray-500">Genuine Kashmir products</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-[#f9e6d7] transition-colors duration-300">
                <Heart className="text-xaidez-accent"/>
                <h4 className="font-semibold text-xaidez-accent">Premium Quality</h4>
                <p className="text-base text-gray-500">Highest quality Kashmiri products</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t pt-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-base text-gray-500">
                ©2025 -  All rights reserved. 
              </p>
                <div className="text-gray-500">
                Developed by <Link href={SITE_INFO.developer.link} className="text-xaidez-accent hover:underline">{SITE_INFO.developer.name}</Link>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}