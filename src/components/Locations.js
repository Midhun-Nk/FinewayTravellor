"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

// Dynamically import react-leaflet components (SSR disabled)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function Locations() {
  const [L, setL] = useState(null);
  const [markerIcon, setMarkerIcon] = useState(null);

  // ✅ Load Leaflet only on client side
  useEffect(() => {
    (async () => {
      const leaflet = await import("leaflet");
      setL(leaflet);
      setMarkerIcon(
        new leaflet.Icon({
          iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
          iconSize: [36, 36],
        })
      );
    })();
  }, []);

  const branchLocations = [
    {
      name: "Kunnamkulam",
      desc: "Main Office & Headquarters",
      coords: [10.6537, 76.0668],
    },
    {
      name: "Guruvayoor",
      desc: "Pilgrimage and Holiday Assistance",
      coords: [10.5942, 76.0417],
    },
    {
      name: "Pazhanji",
      desc: "Local Service Point",
      coords: [10.6769, 76.0085],
    },
  ];

  // Avoid rendering map before Leaflet is loaded
  if (!L) return null;

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gradient-to-b from-orange-50 via-white to-orange-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* --- Text Section --- */}
        <div
          className="space-y-6 animate-fadeIn"
          style={{ animation: "fadeIn 0.8s ease-in-out" }}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="text-orange-500">Travel Partners</span>
          </h2>

          <p
            className="text-lg md:text-xl text-gray-600 max-w-lg"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            At{" "}
            <span className="font-semibold text-orange-500">
              Fine Way Travels
            </span>
            , we’re proud to serve our community from multiple convenient
            locations across Kerala — connecting people to destinations that
            inspire.
          </p>

          <div className="space-y-4">
            {branchLocations.map((loc) => (
              <div
                key={loc.name}
                className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-orange-100"
              >
                <div className="p-2 bg-orange-100 rounded-full">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {loc.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-600 pt-4 max-w-md mb-10">
            Being local means we understand your needs better — from quick
            transfers to memorable holidays, we’re your trusted travel partner.
          </p>
        </div>

        {/* --- Map Section --- */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl border border-orange-100 transform hover:scale-[1.02] transition-transform duration-300"
          style={{ boxShadow: "0 8px 25px rgba(255, 165, 0, 0.2)" }}
        >
          <MapContainer
            center={[10.65, 76.05]}
            zoom={11}
            scrollWheelZoom={false}
            className="h-[400px] md:h-[480px] w-full rounded-3xl"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {branchLocations.map((loc) => (
              <Marker key={loc.name} position={loc.coords} icon={markerIcon}>
                <Popup>
                  <div className="font-semibold text-gray-900">{loc.name}</div>
                  <div className="text-gray-600 text-sm">{loc.desc}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
