"use client";

import { Label } from "radix-ui";
import { useState } from "react";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const isFormValid =
    nombre.trim() !== "" &&
    email.trim() !== "" &&
    mensaje.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    alert("Formulario enviado");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="nombre" className="font-bold">
        Nombre Completo
      </label>
      <input
        placeholder="Juan Perez"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border p-2 rounded"
      />

      <label htmlFor="email" className="font-bold">
        Email
      </label>
      <input
        placeholder="juan@ejemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <label htmlFor="mensaje" className="font-bold">
        Mensaje
      </label>
      <textarea
        placeholder="Escribe tu mensaje aquí..."
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        disabled={!isFormValid}
        className={`p-2 rounded text-white ${
          !isFormValid
            ? "bg-gray-400"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Enviar
      </button>
    </form>
  );
}