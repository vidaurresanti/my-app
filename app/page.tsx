import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main className="min-h-screen bg-gray-950 relative p-8">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl"></div>
        <h1 className="text-3xl font-bold text-white mb-4">Experiencia profesional</h1>
        <div className="grid grid-cols-1 gap-6 px-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Karlook - Founder</h2>
            <p className="text-gray-700 text-sm mb-4">Desarrollé y mantuve aplicaciones web utilizando React, Node.js y MongoDB. Colaboré con equipos de diseño y producto para crear interfaces de usuario intuitivas y funcionales.</p>
            <Link href="/servicios" className="text-blue-500 hover:underline">Ver más</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Ingeniero de Software en ABC Tech</h2>

            <p className="text-gray-700 mb-4">Trabajé en el desarrollo de microservicios utilizando Java y Spring Boot. Implementé soluciones escalables y optimizadas para mejorar el rendimiento de las aplicaciones.</p>
            <Link href="/servicios" className="text-blue-500 hover:underline">Ver más</Link>
          </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Ingeniero de Software en ABC Tech</h2>

            <p className="text-gray-700 mb-4">Trabajé en el desarrollo de microservicios utilizando Java y Spring Boot. Implementé soluciones escalables y optimizadas para mejorar el rendimiento de las aplicaciones.</p>
            <Link href="/servicios" className="text-blue-500 hover:underline">Ver más</Link>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4 pt-8">Herramientas utilizadas</h1>
      </main>

      {/* FOOTER */}
      <div>
        <Footer />    
      </div>
    </div>
  );
}