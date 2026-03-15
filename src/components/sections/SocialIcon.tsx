import type { ReactNode } from "react";

interface SocialIconProps {
  icon: ReactNode;
  href: string;
  label: string;
}

const SocialIcon = ({ icon, href, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-gray-300 dark:border-white/30 rounded-full text-gray-700 dark:text-white hover:border-gray-900 dark:hover:border-white hover:bg-gray-100 dark:hover:bg-white/10 hover:shadow-[0_0_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-105 min-w-[2.75rem] min-h-[2.75rem] sm:min-w-[3rem] sm:min-h-[3rem] md:min-w-0 md:min-h-0"
      aria-label={label}
    >
      <span className="text-base sm:text-lg md:text-xl">{icon}</span>
    </a>
  );
};

export default SocialIcon;
