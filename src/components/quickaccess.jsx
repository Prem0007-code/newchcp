export default function Quickaccess() {
  return (
    <section id="quick" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="anim-border rounded-2xl">
          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/0 px-6 py-10 text-center flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">Quick Access</h2>

            {/* remove outer border; adjust inner card sizes */}
            <div className="mt-2 flex flex-col sm:flex-row items-stretch justify-center gap-6">
              <a
                href="/docs/K3CP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Rulebook (PDF)"
                className="rounded-xl bg-transparent border border-cyan-400/20 px-5 py-6 w-64 sm:w-72 min-h-[170px] mx-auto hover:bg-white/5 transition-colors cursor-pointer block no-underline"
              >
                <h3 className="text-white font-extrabold">Rulebook</h3>
                <p className="text-white/70 text-sm mt-1">View the official contest rulebook.</p>
              </a>
              <a
                href="/pay.jpg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Payment QR Code"
                className="rounded-xl bg-transparent border border-cyan-400/20 px-5 py-6 w-64 sm:w-72 min-h-[170px] mx-auto hover:bg-white/5 transition-colors cursor-pointer block no-underline"
              >
                <h3 className="text-white font-extrabold">Payment QR</h3>
                <p className="text-white/70 text-sm mt-1">Scan to complete the registration fee payment.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
