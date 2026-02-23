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
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let currentIndex = 0;
    const typingSpeed = 35;

    const typingInterval = setInterval(() => {
      if (currentIndex < jsonContent.length) {
        setDisplayedText(jsonContent.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, typingSpeed);

    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    const duration = 3000 + Math.random() * 2000;

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setShouldRender(false);
        onComplete();
        document.body.style.overflow = "";
      }, 500);
    }, duration);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlink);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-left font-mono text-sm md:text-base lg:text-lg text-[#00ff00]">
        <pre className="whitespace-pre-wrap">
          {displayedText}
          <span className={showCursor ? "opacity-100" : "opacity-0"}>█</span>
        </pre>
      </div>
    </div>
  );
};

export default Loader;
