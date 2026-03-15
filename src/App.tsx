import { useState, useMemo } from "react"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { router } from "./app/router"
import { useTheme } from "./contexts/ThemeContext"
import Loader from "./components/ui/Loader"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { theme } = useTheme()
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme === "dark" ? "dark" : "light",
          background: {
            default: theme === "dark" ? "#000000" : "#ffffff",
            paper: theme === "dark" ? "#000000" : "#ffffff",
          },
        },
      }),
    [theme]
  )

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div
        className={`min-w-0 overflow-x-hidden transition-all duration-700 ease-out ${
          isLoading
            ? "opacity-0 blur-md"
            : "opacity-100 blur-0"
        }`}
      >
        <RouterProvider router={router} />
      </div>
    </MuiThemeProvider>
  )
}

export default App
