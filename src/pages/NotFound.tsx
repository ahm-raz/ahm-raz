import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </section>
  )
}

export default NotFound
