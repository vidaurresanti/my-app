import Footer from "@/components/ui/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Mi App</h1>

          <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 p-8">
        <section className="text-center max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">Santiago Vidaurre</h2>
          <p className="mt-4 text-gray-600">
            Perfil profesional, herramientas y conocimientos.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <div>
        <Footer />    
      </div>
    </div>
  );
}