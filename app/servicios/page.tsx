import Link from "next/link";
import {Button} from "@/components/ui/button";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function ServiciosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 grid grid-cols-1 gap-4 justify-content text-center p-8">
          <h1 className="font-bold">Servicios</h1>
          <p>Esta es la página de servicios.</p>
          <div>
            <Button variant="outline" className="ml-4 bg-gray-200 hover:bg-gray-300">
                <Link href="/">Volver a Home</Link>
            </Button>
          </div>
      </main> 
      <Footer />          
    </div>
  );
}