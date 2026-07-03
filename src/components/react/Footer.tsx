export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="/" className="text-gray-900">
              <img src="/logo.svg" alt="Blytz Ventures" className="h-5 w-auto" />
            </a>
            <p className="mt-4 max-w-sm text-gray-600">
              Startup studio and technology consultancy building ventures and shipping products across Southeast Asia.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:hello@blytzventures.com" className="block text-sm text-gray-600 hover:text-gray-900">
                hello@blytzventures.com
              </a>
              <a href="https://wa.me/60198881005" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-gray-900">
                +60 19-888 1005
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Navigation</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#services" className="text-sm text-gray-600 hover:text-gray-900">
                  Services
                </a>
              </li>
              <li>
                <a href="#ventures" className="text-sm text-gray-600 hover:text-gray-900">
                  Ventures
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Companies</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/coming-soon?v=cloud" className="text-sm text-gray-600 hover:text-gray-900">
                  Blytz Cloud
                </a>
              </li>
              <li>
                <a href="https://marketplace.blytz.cloud/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900">
                  blytz marketplace
                </a>
              </li>
              <li>
                <a href="https://work.blytz.cloud/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900">
                  blytz work
                </a>
              </li>
              <li>
                <a href="/coming-soon?v=site" className="text-sm text-gray-600 hover:text-gray-900">
                  Blytz Site
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Blytz Ventures. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/company/blytz-ventures" className="text-sm text-gray-500 hover:text-gray-900">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Threads
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
