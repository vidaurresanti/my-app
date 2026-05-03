import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className = "flex justify-between items-center gap-4 py-4 bg-black text-white shadow-inner">
            <div className="max-w-6xl mx-auto p-4 text-center text-sm text-white-500">
                © Página creada 100% por mí, sin AI.
            </div>
            <div className="max-w-6xl mx-auto p-4 text-center text-sm text-gray-500">
                <a href="https://www.linkedin.com/in/santiagovidaurre" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
            </div>                     
        </footer>
    );
}