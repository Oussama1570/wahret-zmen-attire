import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-luxury text-luxury-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Wahret Zmen By Sabri</h3>
            <p className="text-luxury-foreground/80 mb-6 max-w-md">
              Preserving the timeless elegance of traditional Moroccan craftsmanship through exquisite Jebba collections that honor our heritage while embracing contemporary style.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-luxury-foreground/80 hover:text-luxury-foreground transition-colors cursor-pointer" />
              <Instagram className="h-6 w-6 text-luxury-foreground/80 hover:text-luxury-foreground transition-colors cursor-pointer" />
              <Twitter className="h-6 w-6 text-luxury-foreground/80 hover:text-luxury-foreground transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-luxury-foreground/80">
              <li><a href="#" className="hover:text-luxury-foreground transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-luxury-foreground transition-colors">Collection</a></li>
              <li><a href="#" className="hover:text-luxury-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-luxury-foreground transition-colors">Contact</a></li>
              <li><a href="/terms" className="hover:text-luxury-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-luxury-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-luxury-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@wahretzmen.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+212 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Marrakech, Morocco</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-foreground/20 mt-12 pt-8 text-center text-luxury-foreground/60">
          <p>&copy; 2024 Wahret Zmen By Sabri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};