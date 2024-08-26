"use client";
import { fetch } from "next/server"; // Usar el fetch global para el servidor
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function ListedBooks({ books }) {
  if (!books || books.length === 0) {
    return <div>No hay libros disponibles.</div>;
  }
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-background rounded-lg overflow-hidden shadow-lg"
          >
            {/* <Image
              src="/placeholder.svg"
              alt={book.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            /> */}
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{book.title}</h3>
              <p className="text-muted-foreground mb-4">{book.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">${book.price}</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
