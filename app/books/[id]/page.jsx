import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";

export async function getProductData(id) {
  const filePath = path.join(process.cwd(), "public", "books.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const libros = JSON.parse(jsonData);
  console.log(libros);
  return libros[id];
}

export default async function Product({ params }) {
  const book = await getProductData(params.id);
  console.log(book);
  //   const file = await fetch("/books/books");
  if (!book) {
    return <p>booko no encontrado</p>;
  }
  return (
    <div>
      <h1>{book.titulo}</h1>
      {/* <Image src={book.portada} alt={book.titulo} width={400} /> */}
      <p>Autor: {book.autor}</p>
      <p>Páginas: {book.paginas}</p>
      <p>Precio: ${book.precio}</p>
      <p>Descripción: {book.descripcion}</p>
    </div>
  );
}
