import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
  FaYoutube,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerrank,
  SiCodeforces,
  SiDevdotto,
  SiMedium,
  SiKaggle,
  SiHashnode,
} from "react-icons/si";
import SocialIcon from "./SocialIcon";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/ahm-raz", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/ahm-raz",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com/ahm-raz", label: "Twitter" },
  {
    icon: FaStackOverflow,
    href: "https://stackoverflow.com/users/ahm-raz",
    label: "Stack Overflow",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/ahm-raz",
    label: "LeetCode",
  },
  {
    icon: SiHackerrank,
    href: "https://hackerrank.com/ahm-raz",
    label: "HackerRank",
  },
  {
    icon: SiCodeforces,
    href: "https://codeforces.com/profile/ahm-raz",
    label: "Codeforces",
  },
  { icon: SiDevdotto, href: "https://dev.to/ahm-raz", label: "Dev.to" },
  { icon: SiMedium, href: "https://medium.com/@ahm-raz", label: "Medium" },
  { icon: SiKaggle, href: "https://kaggle.com/ahm-raz", label: "Kaggle" },
  {
    icon: SiHashnode,
    href: "https://hashnode.com/@ahm-raz",
    label: "Hashnode",
  },
  { icon: FaYoutube, href: "https://youtube.com/@ahm-raz", label: "YouTube" },
  { icon: FaDiscord, href: "https://discord.gg/ahm-raz", label: "Discord" },
  { icon: FaTelegram, href: "https://t.me/ahm-raz", label: "Telegram" },
];

const SocialGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Find Me Online
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 justify-items-center">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <SocialIcon
                key={index}
                icon={<Icon />}
                href={href}
                label={label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialGrid;
