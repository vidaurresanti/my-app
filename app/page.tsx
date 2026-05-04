import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* HEADER */}
      <div>
        <Header />
      </div>

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