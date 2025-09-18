export default function Cta() {
  return (
    <section id="register" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="anim-border rounded-2xl">
          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/0 px-6 py-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">Ready to Compete?</h2>
            <p className="mt-3 text-white/70">
              The entry fee is only <span className="text-pink-400 font-semibold">₹199 per team</span>. Fill the form to
              register your team and secure your spot!
            </p>
            <a
              href="#"
              className="inline-block mt-6 px-6 py-3 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold shadow-[0_0_25px_#d946ef]"
            >
              Register Here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
