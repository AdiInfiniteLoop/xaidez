import React from 'react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Xaidez has redefined quality. I ordered from Delhi and the saffron was fresh, aromatic, and perfectly packed.",
      author: "Aradhna Singh",
      avatar: "/assets/avatars/avatar-1.jpg"
    },
    {
      id: 2,
      text: "As someone from Hyderabad, I was thrilled to get original Kashmiri saffron delivered so quickly. Highly recommended!",
      author: "Hassan Ali",
      avatar: "/assets/avatars/avatar-2.jpg"
    },
    {
      id: 3,
      text: "I gifted saffron from Xaidez to my family in Mumbai — they were genuinely impressed. The fragrance says it all.",
      author: "Upasna Gupta",
      avatar: "/assets/avatars/avatar-3.jpg"
    },
    {
      id: 4,
      text: "Being from Srinagar, I know good saffron when I see it — Xaidez delivers authenticity and respect for tradition.",
      author: "Nusrat Qadir",
      avatar: "/assets/avatars/avatar-4.jpg"
    },
    {
      id: 5,
      text: "I run a sweets shop in Lucknow, and Xaidez’s saffron adds the perfect touch to our special dishes. Excellent quality!",
      author: "Nabeel Khan",
      avatar: "/assets/avatars/avatar-5.jpg"
    },
    {
      id: 6,
      text: "From Bangalore to Kashmir, Xaidez made me feel connected to my roots. Fast delivery, pure product, and great customer care.",
      author: "Farheen Ahmed",
      avatar: "/assets/avatars/avatar-6.jpg"
    }
  ];
  

  const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
        <div>
          <div className="mb-4 text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="mb-4 text-gray-700">
            {testimonial.text.split('challenging').map((part, i, arr) => 
              i === arr.length - 1 ? part : <React.Fragment key={i}>{part}<span className="text-amber-500 font-semibold">challenging</span></React.Fragment>
            )}
          </p>
        </div>
        <div className="mt-auto pt-4">
          <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
        </div>
      </div>
    );
  };
  

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">testimonials</p>
        <h2 className="text-3xl font-bold text-gray-800 relative inline-block pb-3 mb-4">
          Our Trusted Clients
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full bg-xaidez-accent"></div>
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
        We&apos;ve loved growing with our customers — delivering joy one order at a time.
        </p>
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;