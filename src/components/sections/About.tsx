const About = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Engineering Systems, Not Just Websites
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              I approach development with a <span className="text-white font-medium">backend-first mindset</span>, 
              understanding that robust architecture is the foundation of every successful application. 
              My focus extends beyond writing code to designing systems that scale.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Database & Architecture</h3>
                <p className="text-gray-400 text-sm">
                  Thoughtful database modeling, indexing strategies, and transaction management. 
                  I design schemas that support growth and maintain data integrity.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Authentication & Security</h3>
                <p className="text-gray-400 text-sm">
                  Implementation of JWT-based authentication, secure session handling, 
                  and role-based access control. Security is built in, not bolted on.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Middleware Architecture</h3>
                <p className="text-gray-400 text-sm">
                  Structured middleware chains for validation, error handling, and request processing. 
                  Clean separation of concerns throughout the application layer.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Production Readiness</h3>
                <p className="text-gray-400 text-sm">
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
