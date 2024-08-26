"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
export default function ListedBooks({ books }) {
  if (!books || books.length === 0) {
    return <div>No hay libros disponibles.</div>;
  }
  useEffect(() => {
    const bookNames = books.map((book) => book.titulo);
  }, [books]);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = useMemo(() => {
    return books.filter(
      (book) =>
        book.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.autor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section className="flex flex-col items-center justify-center space-y-16">
      <div className="relative mt-4 w-3/4">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Busca un libro"
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {filteredProducts.map((book) => (
          <Link href={`/books/${book.id}`} key={book.id}>
            <Card className=" min-w-72 overflow-hidden rounded-lg shadow-lg  min-h-28">
              <div className="relative">
                <Image
                  src={book.portada}
                  alt="Product Image"
                  width={200}
                  height={200}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold max-w-32">
                      {book.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {book.autor}
                    </p>
                  </div>
                  <Button size="sm" className="shrink-0">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
