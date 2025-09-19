export default function Footer() {
  return (
    <footer id="contact" className="mt-8 border-t border-white/10 py-10">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h3 className="text-white font-semibold">Connect with us</h3>
        <div className="mt-3 flex flex-nowrap whitespace-nowrap items-center justify-center gap-5 text-white/80">
          <a href="#" aria-label="Instagram" className="inline-flex hover:text-white" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="inline-flex hover:text-white" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
              <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V24h-4V8zm7 0h3.84v2.182h.055C12.04 8.64 13.61 7.5 16.03 7.5 21.02 7.5 22 10.78 22 15.172V24h-4v-7.5c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.87 1.94-2.87 3.95V24h-4V8z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="inline-flex hover:text-white" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
              <path d="M23.498 6.186a2.997 2.997 0 00-2.11-2.121C19.45 3.5 12 3.5 12 3.5s-7.45 0-9.388.565A2.997 2.997 0 00.502 6.186C0 8.14 0 12 0 12s0 3.86.502 5.814a2.997 2.997 0 002.11 2.121C4.55 20.5 12 20.5 12 20.5s7.45 0 9.388-.565a2.997 2.997 0 002.11-2.121C24 15.86 24 12 24 12s0-3.86-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/>
            </svg>
          </a>
        </div>
        <p className="mt-4 text-white/70 text-sm">©  K3pc Contest {new Date().getFullYear()} KIET Group Of Institutions, Ghazibad Delhi NCR.</p>
      </div>
    </footer>
  );
}
