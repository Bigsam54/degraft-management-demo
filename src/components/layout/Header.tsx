import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  { name: "Property Management", href: "/solutions/property-management" },
  { name: "Asset Management", href: "/solutions/asset-management" },
  { name: "Waste Management", href: "/solutions/waste-management" },
];

const resources = [
  { name: "Webinars", href: "/resources/webinars" },
  { name: "Videos", href: "/resources/videos" },
  { name: "Case Studies", href: "/resources/case-studies" },
  { name: "News", href: "/resources/news" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-panel/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {/* use the image in /public */}
            <img
              src="/favicon.png"
              alt="De-Graft Management"
              className="h-10 w-10 rounded-lg object-contain bg-white"
            />
            <span className="hidden sm:inline font-heading font-semibold text-lg text-text">
              De-Graft Management
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-text hover:text-brand transition-colors">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-panel shadow-card border border-border p-2">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-text hover:bg-secondary rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/industries"
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              Industries
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-text hover:text-brand transition-colors">
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-panel shadow-card border border-border p-2">
                  {resources.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-text hover:bg-secondary rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              About
            </Link>

            <Link
              to="/partners"
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              Partners
            </Link>

            <Link
              to="/contact"
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-text"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border mt-2 pt-4 pb-6 space-y-4">
            <Link
              to="/"
              className="block py-2 text-base font-medium text-text"
            >
              Home
            </Link>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted">Solutions</div>
              {solutions.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-2 pl-4 text-base text-text"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              to="/industries"
              className="block py-2 text-base font-medium text-text"
            >
              Industries
            </Link>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted">Resources</div>
              {resources.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-2 pl-4 text-base text-text"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              className="block py-2 text-base font-medium text-text"
            >
              About
            </Link>

            <Link
              to="/partners"
              className="block py-2 text-base font-medium text-text"
            >
              Partners
            </Link>

            <Link
              to="/contact"
              className="block py-2 text-base font-medium text-text"
            >
              Contact
            </Link>

            <Button asChild className="w-full">
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
