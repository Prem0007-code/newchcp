export default function Quickfacts() {
  const facts = [
    {
      title: "Prize Pool",
      detail: "Prize pool up to Rs. 35,000!",
    },
    {
      title: "Members Per Team",
      detail: "Teams up to 3 members",
    },
    {
      title: "Why Compete?",
      detail:
        "ICPC-style contest. Sharpen problem-solving, teamwork and time management.",
    },
  ];

  return (
    <section id="overview-cards" className="py-16 section-wrap">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="sr-only">Contest Quick Facts</h2>
        <p className="text-center text-white/70 mb-6">
          Hover cards to see key details about the contest format and rules.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((f, i) => (
            <div
              key={i}
              className="group relative anim-border bg-white/5 p-5 text-white/80 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/0 to-indigo-500/0 group-hover:from-fuchsia-600/20 group-hover:to-indigo-500/20 transition-colors" />
              <h3 className="relative font-semibold text-white mb-2">{f.title}</h3>
              <p className="relative text-sm leading-relaxed">{f.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
