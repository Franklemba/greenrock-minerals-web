
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Greenrock Minerals</h3>
            <p className="mb-4 text-stone-300">
              Leading supplier of mining, industrial, and construction equipment in the
              Democratic Republic of Congo and Zambia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-greenrock-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-greenrock-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-stone-300 hover:text-greenrock-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-greenrock-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-stone-300 hover:text-greenrock-400 transition-colors">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-stone-300 hover:text-greenrock-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-300 hover:text-greenrock-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-greenrock-400 mt-0.5" />
                <div>
                  <p className="text-stone-300">Kitwe, Zambia & Lubumbashi, DRC</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-greenrock-400" />
                <a href="tel:+260123456789" className="text-stone-300 hover:text-greenrock-400 transition-colors">
                  +260 12 345 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-greenrock-400" />
                <a href="mailto:info@greenrockminerals.com" className="text-stone-300 hover:text-greenrock-400 transition-colors">
                  info@greenrockminerals.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-stone-300">
              Subscribe to stay updated with our latest products and services.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l-md border-0 bg-stone-800 text-white px-3 py-2 focus:ring-1 focus:ring-greenrock-400 outline-none"
              />
              <Button type="submit" className="rounded-l-none bg-greenrock-600 hover:bg-greenrock-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-stone-800 text-stone-400 text-sm text-center">
          <p>© {new Date().getFullYear()} Greenrock Minerals Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
