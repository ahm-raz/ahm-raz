import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Skills | ahm-raz";
    return () => { document.title = prev; };
  }, []);
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-white">Skills</h1>
    </section>
  )
}

export default Skills
