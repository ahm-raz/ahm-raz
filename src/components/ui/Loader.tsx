import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const jsonContent = `{
  "name": "AHMAD RAZA SALEEM",
  "role": "Full Stack Developer",
  "stack": ["MERN", "Node.js", "React"]
}`;


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
      className={`fixed inset-0 z-[9999] bg-green-900/20 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* CRT Screen */}
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <div className="relative w-full max-w-2xl mx-4">
          {/* Monitor Frame */}
          <div className="border-8 border-gray-600 rounded-lg p-1 bg-gray-800">
            <div className="border-4 border-gray-500 rounded p-4 bg-black relative overflow-hidden">
              {/* Screen Content */}
              <div className="font-mono text-green-500 text-center space-y-4 relative z-10">
                <div className="text-4xl mb-8 animate-pulse">🖥️</div>
                <div className="text-2xl font-bold">AHMAD RAZA SALEEM</div>
                <div className="text-lg opacity-80">Full Stack Developer</div>
                <div className="flex justify-center space-x-4 mt-6">
                  <span className="px-2 py-1 border border-green-500 rounded">MERN</span>
                  <span className="px-2 py-1 border border-green-500 rounded">Node.js</span>
                  <span className="px-2 py-1 border border-green-500 rounded">React</span>
                </div>
                <div className="mt-8">
                  <div className="inline-block w-48 h-2 bg-green-900 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 animate-progress"></div>
                  </div>
                  <div className="mt-2 text-sm">Loading...</div>
                </div>
              </div>

              {/* CRT Effects */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"
                style={{ transform: `translateY(${scanLine}px)` }}
              ></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
              
              {/* Scanlines */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg, rgba(0,255,0,0.03)_0px, rgba(0,255,0,0.03)_1px, transparent_1px, transparent_2px)] pointer-events-none"></div>
            </div>
          </div>
          
          {/* Monitor Stand */}
          <div className="w-32 h-8 bg-gray-700 mx-auto rounded-b-lg"></div>
          <div className="w-16 h-16 bg-gray-800 mx-auto rounded-b-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};
export default Loader;
