const Footer = () => (
  <footer className="bg-black/60 border-t border-white/10 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Ahmad Raza Saleem
        </div>
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/ahm-raz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff00] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ahm-raz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff00] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ahmrazsal7@gmail.com"
            className="text-[#00ff00] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer