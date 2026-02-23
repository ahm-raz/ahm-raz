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
    <section className="py-16 md:py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            How I Build Software
          </h2>
          <div className="space-y-4">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="flex items-start gap-4 text-gray-300"
              >
                <span className="text-[#00ff00] mt-1">▸</span>
                <p className="flex-1">{approach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
