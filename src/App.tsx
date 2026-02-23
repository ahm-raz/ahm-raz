import { useState } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./app/router"
import Loader from "./components/ui/Loader"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div
        className={`transition-all duration-700 ease-out ${
          isLoading
            ? "opacity-0 blur-md"
            : "opacity-100 blur-0"
        }`}
      >
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
