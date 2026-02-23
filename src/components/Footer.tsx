export default function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/10 py-10 text-center">
      <p className="text-2xl font-bold text-white mb-4">Let&apos;s Talk.</p>
      <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
        <a
          href="mailto:nikhil.kaul98@gmail.com"
          className="hover:text-red-400 transition-colors"
        >
          nikhil.kaul98@gmail.com
        </a>
        <span className="text-white/20">|</span>
        <a
          href="https://www.linkedin.com/in/nikhil-kaul-00298a115"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400 transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-white/20">|</span>
        <a
          href="https://github.com/nkaul2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400 transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
