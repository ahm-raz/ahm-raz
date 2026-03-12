import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Projects | ahm-raz";
    return () => { document.title = prev; };
  }, []);
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-white">Projects</h1>
    </section>
  )
}

export default Projects
