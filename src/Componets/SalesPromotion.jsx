import React from 'react';

const SalesPromotion = () => {
    return (
<section className="relative w-full">
  {/* Full-width image */}
  <img
    src="https://i.ibb.co.com/tTMbNjFF/pexels-cottonbro-4778662.jpg"
    alt="Group study"
    className="w-full h-[400px] md:h-[500px] object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0  bg-opacity-40"></div>

  {/* Centered content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h4
      className="uppercase tracking-widest text-sm md:text-base mb-2 font-normal"
      style={{ color: "#AD56C4" }}
    >
      📢 Special Promotion
    </h4>
    <h2
      className="text-4xl md:text-5xl font-normal mb-4 animate-bounce drop-shadow-lg"
      style={{ color: " #f000b8" }}
    >
      Minimum 20% Off!
    </h2>
    <p
      className="text-xl md:text-xl mb-8 max-w-2xl font-medium"
      style={{ color: "#FF8DA1" }}
    >
      Join our group study and enjoy exclusive offers on premium resources.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4">
      <a
        href="#"
        className="px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105"
        style={{
          backgroundColor: "#f000b8",
          color: "white",
        }}
      >
        Join Now
      </a>
      <a
        href="#"
        className="px-8 py-3 rounded-full font-semibold border-2 transition duration-300 transform hover:scale-105"
        style={{
          borderColor: "#f000b8",
          color: "#f000b8",
        }}
      >
        Learn More
      </a>
    </div>
  </div>
</section>



    );
};

export default SalesPromotion;