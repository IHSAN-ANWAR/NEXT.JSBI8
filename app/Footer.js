import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-center text-surface/75  dark:text-white/75 lg:text-left">

     

      {/* Footer Content */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* About */}
          <div>
            <h6 className="mb-4 font-semibold uppercase">Our Restaurant</h6>
            <p>
              Experience fine dining with delicious flavors, cozy ambiance, and excellent service. 
              We serve food made with love and fresh ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="mb-4 font-semibold uppercase">Quick Links</h6>
            <p className="mb-2"><Link href="/menu">Menu</Link></p>
            <p className="mb-2"><Link href="/about">About Us</Link></p>
            <p className="mb-2"><Link href="/reservations">Reservations</Link></p>
            <p><Link href="/contact">Contact</Link></p>
          </div>

          {/* Opening Hours */}
          <div>
            <h6 className="mb-4 font-semibold uppercase">Opening Hours</h6>
            <p className="mb-2">Mon - Fri: 11:00 AM - 10:00 PM</p>
            <p className="mb-2">Sat - Sun: 9:00 AM - 11:00 PM</p>
            <p className="mb-2">Happy Hour: 5:00 PM - 7:00 PM</p>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="mb-4 font-semibold uppercase">Contact</h6>
            <p className="mb-2">📍 Islamabad</p>
            <p className="mb-2">📨 ihsan.anwar4321@gmail.com</p>
            <p>📞 +92 3276508773</p>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-black/5 p-6 text-center">
        <span>© {new Date().getFullYear()} MyRestaurant. All rights reserved.</span>
      </div>
    </footer>
  );
}
