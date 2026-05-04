import Link from "next/link"

export default function Header () {
    return (
      
    <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Mi App</h1>

          <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </div>
    </header>
  );
}