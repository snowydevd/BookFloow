import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

// import { useCart } from "../cartProvider";

import { Button } from "@/components/ui/button";
import NavBar from "@/components/ux/navbar";
import AddToCart from "@/components/ux/cart/addToCart";

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
    <main className="flex flex-col items-center justify-center">
      <NavBar />
      <div className="w-3/4">
        <Link href="/">
          <Button variant="secondary">Volver</Button>
        </Link>
      </div>
      <article className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto p-4 md:p-8">
        <div className="flex-1">
          <Image
            src={book.portada}
            alt={book.titulo}
            width={350}
            height={350}
            className="rounded-xl"
          />
        </div>
        <div className="flex-1 grid gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">{book.titulo}</h1>

          <p className="text-muted-foreground">por {book.autor}</p>
          <h3 className="text-md text-muted-foreground">
            Numero de paginas: {book.paginas}
          </h3>
          <div className="text-4xl font-bold">${book.precio}</div>
          <div className="flex gap-2">
            <AddToCart items={book} />
            <Button size="lg" variant="outline">
              Alquilar
            </Button>
            <Button size="lg" variant="outline">
              Intercambiar
            </Button>
          </div>
          <div className="text-sm leading-loose text-muted-foreground">
            <p>Descripción: {book.descripcion}</p>
          </div>
        </div>
      </article>
    </main>
  );
}
