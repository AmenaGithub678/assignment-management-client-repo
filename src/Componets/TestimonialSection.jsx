import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jane Roe",
    role: "Business Woman",
    image: "https://i.pravatar.cc/100?img=5",
    text: "Imagination... What we can easily see is only a small percentage of what is possible. Logistics through innovation, dedication, and technology.",
  },
  {
    name: "James Doe",
    role: "Musician",
    image: "https://i.pravatar.cc/100?img=8",
    text: "The community helped me understand teamwork in a fun way. Every assignment improved my creativity and technical skills.",
  },
  {
    name: "Ellen Koe",
    role: "CEO",
    image: "https://i.pravatar.cc/100?img=11",
    text: "Outstanding experience! The guidance, projects, and environment make learning exciting and motivating.",
  },
  {
    name: "Michael Ray",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/100?img=15",
    text: "Every lesson feels like a step closer to mastery. The resources and mentors are top-notch!",
  },
  {
    name: "Sabrina Ali",
    role: "UI Designer",
    image: "https://i.pravatar.cc/100?img=21",
    text: "The platform design and structured flow make it fun to learn and explore new ideas each day.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const visibleTestimonials = testimonials.slice(index, index + 3);
  const display = visibleTestimonials.length < 3
    ? [...visibleTestimonials, ...testimonials.slice(0, 3 - visibleTestimonials.length)]
    : visibleTestimonials;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          What Our Students Have to Say 💬
        </h2>

        <div className="flex justify-between items-center">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="border border-gray-400 px-4 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-all rounded-md"
          >
            PREV
          </button>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 mx-6">
            <AnimatePresence mode="wait">
              {display.map((t, i) => (
                <motion.div
                  key={t.name + i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white shadow-lg hover:shadow-2xl rounded-xl p-6 border border-gray-100 transition-all duration-300"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 mx-auto rounded-full object-cover border-4 border-blue-100"
                  />
                  <p className="text-gray-600 mt-4 text-sm italic leading-relaxed">
                    “{t.text}”
                  </p>
                  <h3 className="font-semibold mt-4 text-gray-900">{t.name}</h3>
                  <p className="text-blue-600 text-sm">{t.role}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="border border-gray-400 px-4 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-all rounded-md"
          >
            NEXT
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
