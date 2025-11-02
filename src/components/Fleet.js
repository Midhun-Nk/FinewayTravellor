
export const Fleet = () => {
  const fleet = [
    {
      title: "Bus",
      capacity: "49, 34 Seater",
      icon: "./bus.png",
      desc: "Spacious and comfortable buses perfect for large groups, ensuring smooth long-distance travel.",
    },
    {
      title: "Traveller",
      capacity: "10, 12, 17, 19, 26 Seater",
      icon: "./travellor.png",
      desc: "Ideal for family or group tours — enjoy comfort, air conditioning, and extra luggage space.",
    },
    {
      title: "Innova / Hycross",
      capacity: "7 Seater",
      icon: "./hycross.png",
      desc: "Premium comfort and reliability for small families and executive trips.",
    },
    {
      title: "Rumion / Enjoy",
      capacity: "7 Seater",
      icon: "./romio.png",
      desc: "Compact and efficient MPVs, great for city rides and family road trips.",
    },
  ];

  return (
    <section
      id="fleet"
      className="md:py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="mx-auto text-center">
         <span
          className="px-6 block text-3xl md:text-4xl text-orange-400 mb-3 mt-10"
          style={{ fontFamily: "Mea Culpa, cursive" }}
        >
            Travel in Style
        </span>

        {/* Heading */}
        <h2
             className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight  "
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.5px",
            }}
          
        >
          Our Vehicle Fleet
        </h2>
        <p className="text-base md:text-xl text-gray-600 mb-10 px-10">
          Choose from our range of modern, well-maintained vehicles for every travel need.
        </p>

        {/* Horizontal Scroll Section */}
        <div
          className="
            flex gap-6 md:gap-8 
            overflow-x-auto overflow-y-hidden scrollbar-hide
            scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100
            snap-x snap-mandatory
            pb-6 px-4  md:px-10
             md:mx-0
          "
        >
          {fleet.map((item) => (
            <div
              key={item.title}
              className="
                snap-start flex-shrink-0
                w-64 sm:w-72 md:w-80
                bg-white border border-orange-100 rounded-3xl
                overflow-hidden shadow-lg hover:shadow-2xl
                transition-all duration-500
                transform hover:-translate-y-2 hover:scale-[1.02]
              "
            >
              {/* Image */}
              <div className="relative h-44 md:h-56 bg-gradient-to-b from-orange-100 to-orange-200 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-28 md:h-36 object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-2 right-3 bg-orange-600 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  {item.capacity}
                </div>
              </div>

              {/* Text */}
              <div className="p-5 md:p-6 text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint (mobile only) */}
        <p className="text-sm text-gray-400 mt-4 md:hidden animate-pulse">
          ← Swipe to explore more vehicles →
        </p>
      </div>
    </section>
  );
};
