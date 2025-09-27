export default function Sponsor() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="uppercase text-xs tracking-wide text-white/70">Sponsored By</p>

        {/* Sponsor card */}
        <div className="mt-4 flex justify-center">
          <div className="bg-white/95 rounded-2xl px-8 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] inline-flex flex-col items-center">
            <svg width="64" height="64" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="azg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="44" height="44" rx="10" fill="url(#azg)"/>
              <path d="M12 31 L31 13 M19 13 H31 V25" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span className="mt-3 text-base font-semibold text-gray-800">AlgoZenith</span>
          </div>
        </div>

        {/* New center content below sponsor */}
        <h2 className="mt-10 text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
          Redefining the Future of Competitive Programming
        </h2>
        <p className="mt-3 max-w-3xl mx-auto text-white/70 leading-relaxed">
          Inspired by ICPC, CodeHurdle 2025 challenges you to unlock creativity through problem-solving,
          teamwork, and innovation. Tackle real-world algorithmic complexities, master data structures, and
          optimize solutions under pressure. It’s not just a competition—it’s your chance to leave a mark in the
          coding world.
        </p>
      </div>
    </section>
  );
}
