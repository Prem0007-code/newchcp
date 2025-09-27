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
              href="https://unstop.com/o/lvurREo?lb=29n8WBSa&utm_medium=Share&utm_source=WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold shadow-[0_0_25px_#d946ef]"
            >
              Register Here
            </a>

            {/* After Registration small card */}
            <div className="mx-auto mt-6 max-w-md rounded-xl border border-blue-400/40 bg-white/5 px-5 py-4 text-left shadow-[0_0_18px_rgba(34,197,94,0.12)] hover:border-green-300/60 transition-colors">
              <h3 className="text-green-300 font-semibold text-base">After Registration</h3>
              <p className="text-white/70 text-sm mt-1">
                Please fill this form to submit your team details.
              </p>
              <a
                href="/after-registration"
                className="inline-block mt-3 px-4 py-2 rounded-md bg-green-600 hover:bg-blue-500 text-white text-sm font-medium shadow-[0_0_12px_rgba(34,197,94,0.25)]"
              >
                Fill the Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

