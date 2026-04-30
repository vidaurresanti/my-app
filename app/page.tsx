import { Button } from "@/components/ui/button";
import { Home, User, Mail } from "lucide-react";

export default function Home_Page() {
  return (
    <div>
      <header className="flex flex-col gap-4 border-b border-slate-200/80 bg-white/80 px-6 py-4 shadow-sm shadow-slate-200/20 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950">
              SV
            </div>
            <div>
              <p className="text-sm font-semibold">Santi Vida</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Portfolio personal</p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <Home className="size-4" />
              Inicio
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="size-4" />
              Sobre mí
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Mail className="size-4" />
              Contacto
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-4xl font-semibold">Hola, soy Santi VVVii 👋</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Mi primera app con Next.js 🚀
        </p>
      </main>
    </div>
  );
}
