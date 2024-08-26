"use server";

// Usar el fetch global para el servidor
import ListedBooks from "./listedBooks";
import NavBar from "@/components/ux/navbar";

export default async function LibrosPage() {
  let books;

  try {
    // Realiza la solicitud directamente y espera la respuesta
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/bookdata`,
      {
        cache: "no-store", // Evita problemas de cache si es necesario
      }
    );
    books = await res.json();
  } catch (error) {
    console.error("Error en el fetching: " + error);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-16">
      <NavBar />
      <h1>Lista de Libros</h1>
      <ListedBooks books={books} />
    </div>
  );
}
