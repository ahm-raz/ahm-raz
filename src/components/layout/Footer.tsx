const Footer = () => (
  <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 text-gray-700 dark:text-white py-5 sm:py-6 md:py-8">
    <div className="w-full max-w-full container mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
          © {new Date().getFullYear()} Ahmad Raza Saleem
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm order-1 sm:order-2">
          <a
            href="https://github.com/ahm-raz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors py-1 min-h-[2.5rem] inline-flex items-center"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ahm-raz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors py-1 min-h-[2.5rem] inline-flex items-center"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ahmrazsal7@gmail.com"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors py-1 min-h-[2.5rem] inline-flex items-center"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer