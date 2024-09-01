"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default function ListedBooks({ books }) {
  if (!books || books.length === 0) {
    return <div>No hay libros disponibles.</div>;
  }

  const [priceRange, setPriceRange] = useState([0, 100]);
  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = useMemo(() => {
    return books.filter(
      (book) =>
        book.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.autor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section className="container mx-auto p-4">
      <div className="flex items-center gap-5 mb-6">
        <h1 className="text-2xl font-bold">Libros disponibles</h1>
        <div className="w-2/4">
          <Input
            type="text"
            placeholder="Busca un libro"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sección de filtros */}
        <div className="w-full lg:w-1/4 lg:sticky lg:top-4 h-fit bg-background p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">Filtros</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Autores reconocidos</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="autor-marquez" />
                  <Label htmlFor="autor-marquez" className="ml-2">
                    Gabriel García Márquez
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="autor-orwell" />
                  <Label htmlFor="autor-orwell" className="ml-2">
                    George Orwell
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="autor-rowling" />
                  <Label htmlFor="autor-rowling" className="ml-2">
                    J.K. Rowling
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Editoriales reconocidas</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="editorial-penguin" />
                  <Label htmlFor="editorial-penguin" className="ml-2">
                    Penguin Random House
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="editorial-salamandra" />
                  <Label htmlFor="editorial-salamandra" className="ml-2">
                    Salamandra
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="editorial-plaza" />
                  <Label htmlFor="editorial-plaza" className="ml-2">
                    Plaza & Janés
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Tipo de tapa</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="tapa-blanda" />
                  <Label htmlFor="tapa-blanda" className="ml-2">
                    Tapa blanda
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="tapa-dura" />
                  <Label htmlFor="tapa-dura" className="ml-2">
                    Tapa dura
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Géneros</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="genero-fantasia" />
                  <Label htmlFor="genero-fantasia" className="ml-2">
                    Fantasía
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="genero-ciencia-ficcion" />
                  <Label htmlFor="genero-ciencia-ficcion" className="ml-2">
                    Ciencia ficción
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="genero-clasico" />
                  <Label htmlFor="genero-clasico" className="ml-2">
                    Clásico
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="genero-thriller" />
                  <Label htmlFor="genero-thriller" className="ml-2">
                    Thriller
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Precio</h3>
              <Slider
                min={0}
                max={100}
                step={1}
                value={priceRange}
                onValueChange={handlePriceChange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de books */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {!searchTerm
              ? books.slice(0, 9).map((book) => (
                  <Link href={`/books/${book.id}`} key={book.id}>
                    {" "}
                    <Card className="flex flex-col">
                      <div className="relative pt-[100%]">
                        <Image
                          src={book.portada}
                          alt={book.titulo}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </div>
                      <CardContent className="flex-grow p-4">
                        <h3 className="font-semibold">{book.titulo}</h3>
                        <p className="text-sm text-muted-foreground">
                          Autor: {book.autor}
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <p className="text-lg font-bold">
                          ${book.precio.toFixed(2)}
                        </p>
                      </CardFooter>
                    </Card>
                  </Link>
                ))
              : ""}
            {searchTerm
              ? filteredProducts.map((book) => (
                  <Link href={`/books/${book.id}`} key={book.id}>
                    <Card className="flex flex-col">
                      <div className="relative pt-[100%]">
                        <Image
                          src={book.portada}
                          alt={book.titulo}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </div>
                      <CardContent className="flex-grow p-4">
                        <h3 className="font-semibold">{book.titulo}</h3>
                        <p className="text-sm text-muted-foreground">
                          Marca: {book.autor}
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <p className="text-lg font-bold">
                          ${book.precio.toFixed(2)}
                        </p>
                      </CardFooter>
                    </Card>
                  </Link>
                ))
              : ""}
          </div>
        </div>
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
