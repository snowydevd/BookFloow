import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";

export async function getProductData(id) {
  const filePath = path.join(process.cwd(), "public", "books.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const libros = JSON.parse(jsonData);
  return libros[id];
}

export default async function Product({ params }) {
  const book = await getProductData(params.id);
  //   const file = await fetch("/books/books");
  if (!book) {
    return <p>Este libro no existe</p>;
  }
  return (
    <main>
      <section className="flex">
        <Image
          src={book.portada}
          alt={book.titulo}
          width={500}
          height={500}
          className=""
        />
      </section>
      <h1>{book.titulo}</h1>

      <p>Autor: {book.autor}</p>
      <p>Páginas: {book.paginas}</p>
      <p>Precio: ${book.precio}</p>
      <p>Descripción: {book.descripcion}</p>
    </main>
  );
}
