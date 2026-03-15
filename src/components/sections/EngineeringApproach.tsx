const EngineeringApproach = () => {
  const approaches = [
    "Modular architecture with clear separation of concerns",
    "Service/repository pattern for business logic abstraction",
    "Comprehensive validation layers and input sanitization",
    "Clean API contracts with consistent response structures",
    "Scalable folder structure following industry best practices",
    "Production-grade logging and error handling",
    "Environment-based configuration management",
    "Database optimization through indexing and query tuning",
  ];

  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="w-full max-w-full container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto min-w-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 md:mb-12">
            How I Build Software
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base min-w-0"
              >
                <span className="text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1 shrink-0">▸</span>
                <p className="flex-1 min-w-0 break-words">{approach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
