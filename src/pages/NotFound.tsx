import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "404 | ahm-raz";
    return () => { document.title = prev; };
  }, []);
  return (
    <section>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </section>
  )
}

export default NotFound
