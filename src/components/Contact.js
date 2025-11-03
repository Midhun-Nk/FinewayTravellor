import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export const Contacts = () => (
  <section id="contact" className="py-30 md:py-30 bg-gray-900 text-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white pt-10">
          Start Your Journey Today
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Get in touch for bookings, information, and custom packages.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-orange-400">Contact Info</h3>
          
          <div className="flex items-start space-x-4">
            <Phone className="flex-shrink-0 h-6 w-6 text-orange-300 mt-1" />
            <div>
              <h4 className="text-lg font-medium text-white">Booking & WhatsApp</h4>
              <a href="tel:+919747827270" className="hover:text-orange-300 block">97478 27270</a>
              <a href="tel:+918606247270" className="hover:text-orange-300 block">86062 47270</a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="flex-shrink-0 h-6 w-6 text-orange-300 mt-1" />
            <div>
              <h4 className="text-lg font-medium text-white">Email</h4>
              <a href="mailto:fineway655@gmail.com" className="hover:text-orange-300 block">fineway655@gmail.com</a>
              <p className="text-sm text-gray-400">(General Inquiries)</p>
              <a href="mailto:gregarykt@gmail.com" className="hover:text-orange-300 block mt-1">gregarykt@gmail.com</a>
              <p className="text-sm text-gray-400">(Information)</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="flex-shrink-0 h-6 w-6 text-orange-300 mt-1" />
            <div>
              <h4 className="text-lg font-medium text-white">Main Office</h4>
              <p>New Road Aynoor, Pazhanji,<br/>Kunnamkulam, 680542</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-orange-400">Follow Us</h3>
          <p className="text-gray-400">Stay updated with our latest offers and destinations.</p>
          <div className="flex space-x-6">
            <a href="https://youtube.com/@fine__waytravels?si=wM-9BU1dzod0nzRw" className="text-gray-400 hover:text-orange-300 transition-colors">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/fine__way/" className="text-gray-400 hover:text-orange-300 transition-colors">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="https://youtube.com/@fine__waytravels?si=wM-9BU1dzod0nzRw" className="text-gray-400 hover:text-orange-300 transition-colors">
              <Youtube className="h-8 w-8" />
            </a>
          </div>
          <div className="text-sm text-gray-400 space-y-1">
            <p>Facebook: <span className="text-white">Fine way Travels</span></p>
            <p>Instagram: <span className="text-white">@fine__way</span></p>
            <p>YouTube: <span className="text-white">@fine__waytravels</span></p>
          </div>
        </div>

        {/* QR Codes */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-orange-400">Scan to Connect</h3>
          <p className="text-gray-400">Quickly connect via WhatsApp or follow Instagram.</p>
          <div className="flex space-x-4">
            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-900 text-center p-0 shadow-md">
               <img src="./whatspp_qr.png" alt="QR code for WhatsApp" />
            </div>
            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-900 text-center p-0 shadow-md">
              <img src="./insta_qr.png" alt="QR code for Instagram" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);
