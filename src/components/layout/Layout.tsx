import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col w-full min-w-0 overflow-x-hidden bg-white dark:bg-black relative">
            <div
                className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.10),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.10),transparent_50%)]"
                aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1 w-full max-w-full container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 pt-16 sm:pt-20 md:pt-24 pb-8">
                <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;