const SnowfallBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => {
        const delay = Math.random() * 5;
        const duration = 15 + Math.random() * 10;
        const left = Math.random() * 100;
        const size = 1 + Math.random() * 2;
        const opacity = 0.1 + Math.random() * 0.15;

        return (
          <div
            key={i}
            className="absolute top-0 rounded-full bg-white"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
              animation: `snowfall ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SnowfallBackground;
