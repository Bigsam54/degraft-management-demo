import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-panel">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/favicon.png"
                alt="De-Graft Management"
                className="h-10 w-10 rounded-lg object-contain bg-white"
              />
              <span className="font-heading font-semibold text-lg">
                De-Graft
              </span>
            </div>
            <p className="text-sm text-panel/70">
              Cloud software that replaces spreadsheets for Property, Asset & Waste Management.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions" className="text-panel/70 hover:text-panel transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-panel/70 hover:text-panel transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-panel/70 hover:text-panel transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-panel/70 hover:text-panel transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-panel/70 hover:text-panel transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-panel/70 hover:text-panel transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-panel/70 hover:text-panel transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-panel/70 hover:text-panel transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/dpa" className="text-panel/70 hover:text-panel transition-colors">
                  Data Processing Agreement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-panel/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-panel/70">
            © {currentYear} De-Graft Management. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-sm text-panel/70">
            <span>London</span>
            <span>•</span>
            <span>Accra</span>
            <span>•</span>
            <span>Nairobi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
