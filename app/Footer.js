import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white/80 bg-gradient-to-r from-[#0b1020]/90 via-[#0b1020]/80 to-[#0b1020]/70 border-t border-white/10">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10 text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* About */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-white">Our Restaurant</h6>
            <p className="text-white/70">
              Experience fine dining with delicious flavors, cozy ambiance, and excellent service.
              We serve food made with love and fresh ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-white">Quick Links</h6>
            <p className="mb-2"><Link className="hover:underline" href="/menu">Menu</Link></p>
            <p className="mb-2"><Link className="hover:underline" href="/about">About Us</Link></p>
            <p className="mb-2"><Link className="hover:underline" href="/book">Book Table</Link></p>
            <p><Link className="hover:underline" href="/contact">Contact</Link></p>
          </div>

          {/* Opening Hours */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-white">Opening Hours</h6>
            <p className="mb-2 text-white/70">Mon - Fri: 11:00 AM - 10:00 PM</p>
            <p className="mb-2 text-white/70">Sat - Sun: 9:00 AM - 11:00 PM</p>
            <p className="mb-2 text-white/70">Happy Hour: 5:00 PM - 7:00 PM</p>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-white">Contact</h6>
            <p className="mb-2 text-white/70">📍 Islamabad</p>
            <p className="mb-2 text-white/70">📨 ihsan.anwar4321@gmail.com</p>
            <p className="text-white/70">📞 +92 3276508773</p>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white/10 p-6 text-center text-white/60">
        <span>© {new Date().getFullYear()} MyRestaurant. All rights reserved.</span>
      </div>
    </footer>
  );
}
