import ContactForm from "@/components/ui/contact-form";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function ContactoPage() {
  return (
    <>
    <Header />
    <main className="flex-1 p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <ContactForm />
    </main>
    <Footer />
    </>
  );
}