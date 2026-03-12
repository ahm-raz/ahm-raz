import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "About | ahm-raz";
    return () => { document.title = prev; };
  }, []);
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-white">About Me</h1>
      <p className="text-gray-300">
        Short professional background and development philosophy.
      </p>
    </section>
  )
}

export default About
