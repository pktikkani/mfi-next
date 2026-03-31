export default function Footer() {
  return (
    <footer className="hidden md:block w-full bg-footer-bg mt-24 relative">
      {/* Top edge glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-txt mb-2 tracking-tight">
              The Mindful Initiative | Ashtanga Yoga
            </h2>
            <p className="text-sm text-txt-muted leading-relaxed">
              Helping People to be more Mindful and Compassionate Since 2017
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-txt uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-txt-muted">
              <li className="flex items-center gap-2">
                <span className="text-primary">✉</span>
                info@themindfulinitiative.com
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">☎</span>
                +91 9535 4186 04
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">⌖</span>
                <span>
                  87, 3rd Main, 4th Phase, Dollars Layout, JP Nagar 7th Phase,
                  Bengaluru, Karnataka 560078
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-txt uppercase tracking-widest mb-5">
              Social media
            </h3>
            <ul className="space-y-3 text-sm text-txt-muted">
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <span>📷</span> Instagram
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <span>💼</span> LinkedIn
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <span>🐦</span> Twitter
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-txt uppercase tracking-widest mb-5">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-txt-muted">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Terms and conditions
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Privacy policy
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Cookies policy
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border-custom">
          <p className="text-xs text-txt-light">
            The Mindful Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
