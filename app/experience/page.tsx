import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Experiencia</h1>
      </main>
      <Footer />
    </div>
  );
}