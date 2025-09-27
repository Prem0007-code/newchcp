export default function Timeline() {
  const steps = [
    { date: "18th September", title: "Registration Starts" },
    { date: "27th September", title: "Registration Ends (23:59)" },
    { date: "28th September", title: "Preliminary Round" },
    { date: "4nd October", title: "Final Round" },
    { date: "4nd October", title: "Prize Distribution" },
  ];
  return (
    <section id="timeline" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-white tracking-wide">Mark Your Calendar</h2>
        <p className="text-center text-white/70 mt-2">The contest unfolds over several key dates. Ensure your team is prepared for all stages of the competition.</p>

        <div className="relative mx-auto max-w-4xl mt-10">
          {/* center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-white/10" />

          {steps.map((s, i) => {
            const isLeft = i % 2 === 1; // 1st right, 2nd left, 3rd right...
            return (
              <div key={i} className="relative flex items-center justify-center py-8">
                {/* numbered pill */}
                <div className="z-10 absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-fuchsia-600 text-white flex items-center justify-center font-bold shadow-[0_0_20px_#d946ef]">
                  {i + 1}
                </div>

                {/* two-column area with card on left or right */}
                <div className="w-full grid grid-cols-2 gap-6">
                  {isLeft ? (
                    <>
                      <div className="justify-self-end sm:max-w-md w-full">
                        <div className="rounded-xl bg-transparent border border-cyan-400/20 hover:border-cyan-400/40 transition-colors px-6 py-5 text-left">
                          <h3 className="text-white font-extrabold">{s.date}</h3>
                          <p className="text-white/70 text-sm">{s.title}</p>
                        </div>
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div className="justify-self-start sm:max-w-md w-full">
                        <div className="rounded-xl bg-transparent border border-cyan-400/20 hover:border-cyan-400/40 transition-colors px-6 py-5 text-left">
                          <h3 className="text-white font-extrabold">{s.date}</h3>
                          <p className="text-white/70 text-sm">{s.title}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
