"use server";
import dynamic from "next/dynamic";
// Usar el fetch global para el servidor
// import { promises as fs } from "fs";
// import path from "path";

// const loadBooks = async () => {
//   const filePath = path.join(process.cwd(), "public", "books.json");
//   const fileContents = fs.readFileSync(filePath, "utf8");
//   const libros = JSON.parse(fileContents);

//   return libros;
// };

const ListedBooks = dynamic(() => import("./listedBooks"), { ssr: false });

export default async function LibrosPage() {
  // const books = await loadBooks();
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
      <ListedBooks books={books} />
    </div>
  );
}
