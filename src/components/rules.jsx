export default function Rules() {
  const cards = [
    {
      title: "Team Size",
      detail: "Form a team of up to 3 participants to compete.",
    },
    {
      title: "Code Ethics",
      detail: "No plagiarism. Cite any external references you consult.",
    },
    {
      title: "Languages",
      detail: "C++, Java, or Python are allowed for submissions.",
    },
    {
      title: "Penalties",
      detail: "Standard ICPC penalty for wrong submissions applies.",
    },
  ];

  return (
    <section id="rules" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
          Contest Rules
        </h2>
        <p className="text-center text-white/70 mt-2">Hover a card to reveal details (slides in from the opposite side).</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => {
            const from = i % 2 === 0 ? "translate-x-full" : "-translate-x-full";
            return (
              <div key={c.title} className={`flip ${i % 2 !== 0 ? 'flip-left' : ''}`}>
                <div className="anim-border rounded-2xl">
                  <div className="flip-inner rounded-2xl min-h-[200px] lg:min-h-[220px]">
                    {/* Front */}
                    <div className="flip-face rounded-2xl bg-transparent flex items-center justify-center p-7">
                      <h3 className="text-white font-extrabold text-xl text-center">{c.title}</h3>
                    </div>
                    {/* Back */}
                    <div className="flip-face flip-back rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center p-7">
                      <p className="text-white/85 text-center">{c.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
