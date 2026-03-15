const About = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="w-full max-w-full container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto min-w-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Engineering Systems, Not Just Websites
          </h2>
          <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            <p>
              I approach development with a <span className="text-gray-900 dark:text-white font-medium">backend-first mindset</span>, 
              understanding that robust architecture is the foundation of every successful application. 
              My focus extends beyond writing code to designing systems that scale.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
              <div className="min-w-0">
                <h3 className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Database & Architecture</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  Thoughtful database modeling, indexing strategies, and transaction management. 
                  I design schemas that support growth and maintain data integrity.
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Authentication & Security</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  Implementation of JWT-based authentication, secure session handling, 
                  and role-based access control. Security is built in, not bolted on.
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Middleware Architecture</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  Structured middleware chains for validation, error handling, and request processing. 
                  Clean separation of concerns throughout the application layer.
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Production Readiness</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  Scalable folder structures, environment configuration, logging, and error handling. 
                  Code that's ready for deployment from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
