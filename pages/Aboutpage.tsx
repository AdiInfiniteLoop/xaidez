import HotButton from "@/components/HotButton1"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-xaidez-light">
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-xaidez-light to-gray-100">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-xaidez-primary opacity-15"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-xaidez-primary opacity-15"></div>
      </div>
          
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-8">
        <div className="h-1 w-16 bg-xaidez-primary mx-auto mb-6"></div>
        <span className="text-xaidez-primary font-medium tracking-wider uppercase text-sm">EST. 2010</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-xaidez-secondary">
        Welcome to <span className="relative inline-block">
          Our Company
          <span className="absolute bottom-0 left-0 w-full h-1 bg-xaidez-primary opacity-20"></span>
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
        Crafting excellence with passion, innovation, and dedication to quality.
        We are a forward-thinking company that combines state-of-the-art technology
        with traditional craftsmanship to bring you the best.
      </p>
      
      <div className="flex flex-row gap-4 justify-center">
  <HotButton href="/contact" text="Join Us On Our Journey"/>
  
      </div>
    </div>
  </div>
  
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-xaidez-primary to-transparent opacity-30"></div>
</section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2  text-xaidez-secondary">Our Story</h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-10 lg:mb-16"></div>

          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <ScrollAnimation animation="slide-right" delay={200}>
              <div className="bg-xaidez-light p-8 rounded-lg shadow-md h-full border-t-4 border-xaidez-primary">
                <h3 className="text-xl font-semibold mb-4 text-xaidez-secondary">Our Beginnings</h3>
                <p className="text-gray-600">
                  Founded in 2010, our journey began with a simple vision: to create exceptional products that make a
                  difference in the lives of our customers. What started as a small operation in a modest workspace has
                  grown into a thriving business, driven by our commitment to quality and customer satisfaction. Our
                  founders believed in the power of hard work, integrity, and a customer-first mindset. We started by
                  serving a small, local market but soon expanded as our products resonated with people who valued
                  craftsmanship and reliability.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="bg-xaidez-light p-8 rounded-lg shadow-md h-full border-t-4 border-xaidez-accent">
                <h3 className="text-xl font-semibold mb-4 text-xaidez-secondary">Our Philosophy</h3>
                <p className="text-gray-600">
                  At the heart of everything we do is a philosophy centered around passion, innovation, and attention to
                  detail. We believe in pushing boundaries and embracing new technologies, but we also remain grounded
                  in the values that got us here. Every decision we make is guided by our commitment to sustainability,
                  ethical practices, and the desire to exceed our customers&apos; expectations. This balance of
                  forward-thinking innovation and respect for tradition has been our guiding force from day one.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={600}>
              <div className="bg-xaidez-light p-8 rounded-lg shadow-md h-full border-t-4 border-xaidez-accent">
                <h3 className="text-xl font-semibold mb-4 text-xaidez-secondary">Our Promise</h3>
                <p className="text-gray-600">
                  To our customers, we promise transparency, integrity, and dedication in everything we do. We believe
                  that products should not only serve a function but also embody the values we stand for. When you
                  choose us, you&apos;re not just getting a product – you&apos;re becoming part of our larger story. A story that
                  is built on quality, trust, and continuous improvement. We&apos;re more than just a brand – we are a
                  promise of excellence.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-20 bg-amber-50/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-xaidez-secondary">Our Journey</h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-10 lg:mb-16"></div>

          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

              {/* 2010 */}
              <ScrollAnimation animation="slide-right" className="relative mb-16">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-2xl font-bold text-xaidez-primary">2010</h3>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-xaidez-primary border-4 border-white"></div>
                  <div className="w-1/2 pl-8">
                    <p className="text-gray-600">
                      Our founding year marked the beginning of our commitment to quality and customer satisfaction. We
                      started with a small, passionate team, operating out of a modest workspace. We focused on
                      perfecting our craft and providing customers with products that were built to last.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* 2016 */}
              <ScrollAnimation animation="slide-left" className="relative mb-16">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <p className="text-gray-600">
                      A significant milestone in our journey came in 2016 when we expanded our operations nationally.
                      This expansion allowed us to introduce new product lines, further cementing our position as an
                      innovative force in the industry.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-xaidez-accent border-4 border-white"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-2xl font-bold text-xaidez-accent">2016</h3>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Today */}
              <ScrollAnimation animation="slide-right" className="relative">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-2xl font-bold text-xaidez-secondary">Today</h3>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-xaidez-secondary border-4 border-white"></div>
                  <div className="w-1/2 pl-8">
                    <p className="text-gray-600">
                      Today, we are proud to be recognized as an industry leader. We&apos;ve evolved from a small, passionate
                      startup into a global player, continuing to innovate while remaining true to our core values. We
                      are committed to sustainability, customer satisfaction, and maintaining the highest standards of
                      quality.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-amber-50/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-xaidez-secondary">Our Values</h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-10 lg:mb-16"></div>

          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="bg-xaidez-light p-8 rounded-lg shadow-md text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-xaidez-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-xaidez-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-xaidez-secondary">Trust</h3>
                <p className="text-gray-600 flex-grow">
                  At the heart of our company lies trust. We believe that trust is earned, and we work hard every day to
                  build lasting relationships with our customers, employees, and partners. Our transparency, integrity,
                  and commitment to delivering on our promises are what make us a company people can rely on.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="bg-xaidez-light p-8 rounded-lg shadow-md text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-xaidez-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-xaidez-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-xaidez-secondary">Passion</h3>
                <p className="text-gray-600 flex-grow">
                  Our passion drives everything we do. From the first spark of an idea to the final product, passion
                  fuels our creativity, commitment to quality, and the desire to continuously improve. Whether it&apos;s
                  crafting a new product or providing exceptional customer service, our team&apos;s passion ensures that we
                  always go above and beyond.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={600}>
              <div className="bg-xaidez-light p-8 rounded-lg shadow-md text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-xaidez-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-xaidez-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-xaidez-secondary">Sustainability</h3>
                <p className="text-gray-600 flex-grow">
                  Sustainability isn&apos;t just a buzzword for us; it&apos;s a core value that we actively prioritize. We are
                  committed to reducing our environmental impact through responsible sourcing, sustainable production
                  practices, and a focus on creating long-lasting products. We believe that businesses have a
                  responsibility to help protect the planet.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-xaidez-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-xaidez-light">Our Mission</h2>
              
              <p className="text-lg text-xaidez-light mb-8">
                Our mission is simple – to create products that enhance lives while maintaining the highest standards of
                quality and ethics. We are committed to being a catalyst for positive change in our industry by setting
                new benchmarks for excellence, sustainability, and innovation. We envision a future where our products
                contribute to improving lives, businesses, and the planet, helping shape a more sustainable world for
                generations to come.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-amber-50/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-xaidez-secondary">Join Us on Our Journey of Excellence</h2>
              <p className="text-lg text-gray-600 mb-10">
                Thank you for taking the time to learn more about our story and our mission. We are excited to continue
                our journey of growth and innovation, and we hope you&apos;ll be part of our future chapters. Our commitment
                to excellence is unwavering, and we are always looking for ways to improve and serve our community
                better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-block bg-xaidez-primary text-xaidez-light px-8 py-3 rounded-md font-medium hover:bg-xaidez-hoveraccent transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}