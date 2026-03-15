const ContactHero = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="w-full max-w-full container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center min-w-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-1">
            Open to full-time roles, internships, collaborations, and challenging backend-focused projects.
            <span className="block mt-1 sm:inline sm:mt-0">Let's build something meaningful together.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
