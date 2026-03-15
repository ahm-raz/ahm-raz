import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [scanLine, setScanLine] = useState(0);

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      setScanLine((frame++ % 100) * 2);
    }, 50);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 500);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* CRT Screen */}
      <div className="absolute inset-0 bg-black flex items-center justify-center p-4 sm:p-6 safe-area-inset">
        <div className="relative w-full max-w-2xl min-w-0">
          {/* Monitor Frame */}
          <div className="border-4 sm:border-8 border-gray-600 rounded-lg p-0.5 sm:p-1 bg-gray-800">
            <div className="border-2 sm:border-4 border-gray-500 rounded p-3 sm:p-4 bg-black relative overflow-hidden">
              {/* Screen Content */}
              <div className="font-mono text-gray-400 text-center space-y-2 sm:space-y-4 relative z-10">
                <div className="text-2xl sm:text-4xl mb-4 sm:mb-8 animate-pulse">🖥️</div>
                <div className="text-base sm:text-xl md:text-2xl font-bold break-words">AHMAD RAZA SALEEM</div>
                <div className="text-sm sm:text-lg opacity-80">Full Stack Developer</div>
                <div className="flex flex-wrap justify-center gap-2 sm:space-x-4 sm:gap-0 mt-4 sm:mt-6">
                  <span className="px-2 py-1 border border-gray-500 rounded text-xs sm:text-sm">MERN</span>
                  <span className="px-2 py-1 border border-gray-500 rounded text-xs sm:text-sm">Node.js</span>
                  <span className="px-2 py-1 border border-gray-500 rounded text-xs sm:text-sm">React</span>
                </div>
                <div className="mt-4 sm:mt-8">
                  <div className="inline-block w-32 sm:w-48 h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden max-w-full">
                    <div className="h-full w-0 bg-gray-400 animate-progress"></div>
                  </div>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm">Loading...</div>
                </div>
              </div>

              {/* CRT Effects */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/5 to-transparent"
                style={{ transform: `translateY(${scanLine}px)` }}
              ></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
              
              {/* Scanlines */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg, rgba(0,255,0,0.03)_0px, rgba(0,255,0,0.03)_1px, transparent_1px, transparent_2px)] pointer-events-none"></div>
            </div>
          </div>
          
          {/* Monitor Stand */}
          <div className="w-20 sm:w-32 h-5 sm:h-8 bg-gray-700 mx-auto rounded-b-lg"></div>
          <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gray-800 mx-auto rounded-b-full"></div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
