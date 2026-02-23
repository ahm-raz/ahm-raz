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
      className="group flex items-center justify-center w-14 h-14 border border-[#00ff00]/30 rounded-full text-[#00ff00] hover:border-[#00ff00] hover:bg-[#00ff00]/10 hover:shadow-[0_0_12px_rgba(0,255,0,0.3)] transition-all duration-200 hover:scale-105"
      aria-label={label}
    >
      <span className="text-xl">{icon}</span>
    </a>
  );
};

export default SocialIcon;
