import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <ul className="flex gap-6 py-4">
                    <li><NavLink to="/" className="hover:text-gray-300 transition-colors">Home</NavLink></li>
                    <li><NavLink to="/about" className="hover:text-gray-300 transition-colors">About</NavLink></li>
                    <li><NavLink to="/projects" className="hover:text-gray-300 transition-colors">Projects</NavLink></li>
                    <li><NavLink to="/skills" className="hover:text-gray-300 transition-colors">Skills</NavLink></li>
                    <li><NavLink to="/contact" className="hover:text-gray-300 transition-colors">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;