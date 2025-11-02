import { servicesData } from "@/assets/servicesData";

// --- Services Section ---
export const Services = () => (
  <section id="services" className="bg-gray-50 ">
    <div className="  text-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Text Section */}
        <div className="mt-8 flex-1 text-left md:text-start ml-10">
          <span
            className="block text-3xl md:text-4xl text-orange-400 mb-2"
            style={{ fontFamily: "Mea Culpa, cursive" }}
          >
            Plan your trip with us
          </span>

          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.5px",
            }}
          >
            We Offer The Best Services
          </h2>

          <p
            className="text-base md:text-lg text-gray-600 max-w-md"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Our premium services are designed to make your travel unforgettable.
          </p>
        </div>

        {/* Image Section */}
    <div className="flex-1 flex justify-end">
  <img
    className="hidden md:block w-50 md:w-50 relative z-10 object-contain"
    src="./h5_deco-1.png"
    alt="Decorative graphic"
  />
</div>

      </div>

      {/* Service Cards */}
      <div className=" flex overflow-x-auto gap-6 pb-4  pl-8 scrollbar-hide">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className="flex-shrink-0 w-78 bg-white p-8 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-200 to-orange-300">
              <img
                src={service.icon}
                alt={service.title}
                className="h-10 w-10 object-contain  sm:h-12 sm:w-12"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
