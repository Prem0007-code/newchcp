export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="anim-border rounded-2xl">
          <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/0 px-6 py-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">Contact Us</h2>
            <p className="text-white/70 mt-2">Have questions? We'd love to hear from you. Reach out for any inquiries regarding the contest, registration, or sponsorship.</p>
            <a href="mailto:wcecodechefchapter@gmail.com" className="mt-2 inline-block text-cyan-300 hover:text-cyan-200">koderskorner@kiet.edu</a>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch justify-center gap-6">
              <a href="tel:+917219685991" className="rounded-xl bg-transparent border border-cyan-400/20 px-6 py-6 w-64 sm:w-72 min-h-[120px] mx-auto text-left">
                <h3 className="text-white font-extrabold">Mahesh Singh</h3>
                <p className="text-white/80 mt-1">+91 9125005608</p>
              </a>
              <a href="tel:+918766692833" className="rounded-xl bg-transparent border border-cyan-400/20 px-6 py-6 w-64 sm:w-72 min-h-[120px] mx-auto text-left">
                <h3 className="text-white font-extrabold">Amartya Singh</h3>
                <p className="text-white/80 mt-1">+91 9580081482</p>
              </a>
              <a href="tel:+918766692833" className="rounded-xl bg-transparent border border-cyan-400/20 px-6 py-6 w-64 sm:w-72 min-h-[120px] mx-auto text-left">
                <h3 className="text-white font-extrabold">Gyanendra singh‪</h3>
                <p className="text-white/80 mt-1">+91 9555694252</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
