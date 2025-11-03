"use client";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DestinationsFlow = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const destinations = [
    { title: "Munnar Hills", description: "Lush green hills and tea plantations.", image: "./destination3.jpg" },
    { title: "Alleppey Houseboats", description: "Cruise through the serene backwaters.", image: "./destination1.jpg" },
    { title: "Athirappilly Waterfalls", description: "Majestic waterfalls amidst nature.", image: "./destination4.jpg" },
    { title: "Wayanad", description: "Misty mountains and wildlife sanctuaries.", image: "./destination2.jpg" },
    { title: "Kumarakom", description: "Serene backwaters and scenic resorts.", image: "./destination5.jpg" },
  ];

  const stepHeights = [0, 40, 80, 40, 0];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section id="destinations" className="relative mx-auto overflow-hidden py-16">
      {/* ---- Half Background ---- */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-orange-400"></div>
      </div>

      {/* ---- Content ---- */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <span
          className="px-6 block text-3xl md:text-4xl text-orange-400 mb-3 mt-6"
          style={{ fontFamily: "Mea Culpa, cursive" }}
        >
          Make it memorable
        </span>

        <h2
          className="text-4xl md:text-5xl font-extrabold text-black mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Popular Destinations in Kerala
        </h2>

        {/* ---- Scroll Area ---- */}
        <div className="relative w-full">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-orange-400 text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-5 pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth px-[8vw]"
            style={{
              scrollPadding: "0 8vw",
            }}
          >
            {destinations.map((dest, index) => (
              <div
                key={dest.title}
                className="relative flex-shrink-0 snap-start w-64 sm:w-72 h-96 overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                style={{
                  marginTop: !isMobile ? `${stepHeights[index % stepHeights.length]}px` : "0px",
                }}
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-0 w-full text-center px-4">
                  <h3 className="text-xl font-bold text-white">{dest.title}</h3>
                  <p className="text-sm text-gray-200 mt-1">{dest.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-orange-400 text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* ---- Mobile Hint ---- */}
        {/* <p className="text-sm text-gray-400 mt-6 md:hidden animate-pulse">
          ← Swipe to explore destinations →
        </p> */}
      </div>
    </section>
  );
};

export default DestinationsFlow;
