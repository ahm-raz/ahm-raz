import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Skills | ahm-raz";
    return () => { document.title = prev; };
  }, []);
  return (
    <section className="w-full max-w-2xl mx-auto min-w-0 px-1">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Skills</h1>
    </section>
  )
}

export default Skills
