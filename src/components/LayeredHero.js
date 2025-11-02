"use client";

import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";

export const LayeredHero = ({ backgroundImage, foregroundImage }) => {
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0); // ✅ Start with 0 (no 'window' reference)

  useEffect(() => {
    // ✅ Runs only on client
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Set initial width safely
    setScreenWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // --- Parallax factors ---
  const backgroundZoomFactor = 0.0002;
  const foregroundMoveFactor =
    screenWidth < 640 ? 0.1 : screenWidth < 1024 ? 0.3 : 0.5;
  const textMoveFactorX =
    screenWidth < 640 ? 0.2 : screenWidth < 1024 ? 0.4 : 0.7;
  const ctaMoveFactorX =
    screenWidth < 640 ? 0.1 : screenWidth < 1024 ? 0.3 : 0.5;
  const maxForegroundMove = 150;

  // --- Calculations ---
  const backgroundScale = 1 + scrollY * backgroundZoomFactor;
  const foregroundTranslateY = Math.min(
    scrollY * foregroundMoveFactor,
    maxForegroundMove
  );
  const textTranslateX = scrollY * textMoveFactorX;
  const maxCtaMove = 30;
  const ctaTranslateXLimited = Math.min(scrollY * ctaMoveFactorX, maxCtaMove);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={
            backgroundImage ||
            "https://placehold.co/1920x1080/374151/e0e7ff?text=Your+Background+Image"
          }
          alt="Beautiful landscape background"
          className="w-full h-full object-cover object-center brightness-50"
          style={{ transform: `scale(${backgroundScale})` }}
        />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center h-full">
        <div
          className="absolute top-1/2 left-1/2 text-orange-400 font-extrabold w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
          style={{
            zIndex: 1,
            transform: "translate(-50%, -50%)",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tight leading-none opacity-80 md:text-left text-center md:text-start"
            style={{
              fontFamily: "'Playfair Display', serif",
              marginTop: "-60px",
              transform: `translateX(-${textTranslateX}px)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            Unforgettable
          </h1>

          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cursive mt-2 text-orange-300 text-center"
            style={{
              fontFamily: "'Dancing Script', cursive",
              textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            travel
          </p>

          <h2
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tight leading-none mt-4 opacity-80 md:text-right text-center md:text-end"
            style={{
              fontFamily: "'Playfair Display', serif",
              transform: `translateX(${textTranslateX}px)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            Experiences
          </h2>
        </div>

        {/* Foreground Image */}
        {foregroundImage && (
          <div
            className="absolute bottom-0 left-1/2 h-[85vh] w-auto pointer-events-none"
            style={{
              zIndex: 2,
              transform: `translateX(-50%) translateY(${foregroundTranslateY}px)`,
              filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))",
            }}
          >
            <img
              src={foregroundImage}
              alt="Traveller foreground"
              className="h-full w-auto object-contain"
            />
          </div>
        )}

        {/* CTA Button */}
        <div
          className="absolute right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 text-right text-white max-w-xs sm:max-w-sm"
          style={{
            zIndex: 3,
            bottom:
              screenWidth < 640
                ? "6rem"
                : screenWidth < 1024
                ? "7rem"
                : "3rem",
            transform: `translateX(-${ctaTranslateXLimited}px)`,
            transition: "bottom 0.3s ease-out, transform 0.3s ease-out",
          }}
        >
          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
            Find amazing things to do. <br /> Anytime, anywhere.
          </p>
          <a
            href="#services"
            className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-transform hover:scale-105"
          >
            Explore Our Tours
            <MoveRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
