import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { DotPattern } from "../ui/DotPattern";

const Layout = () => {
    return (
        <DotPattern
            dotSize={2}
            gap={24}
            baseColor="#404040"
            glowColor="#00ff00"
            proximity={120}
            glowIntensity={0.2}
            waveSpeed={0.5}
        >
            <div className="min-h-screen flex flex-col relative z-10 w-full">
                <Navbar />
                <main className="flex-1 container mx-auto px-4 py-8 pt-12">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </DotPattern>
    )
}

export default Layout;