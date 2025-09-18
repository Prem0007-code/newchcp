export default function Footer() {
  return (
    <footer id="contact" className="mt-8 border-t border-white/10 py-10">
      <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
        <p>© {new Date().getFullYear()} codehurdle. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
