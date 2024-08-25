/**
 * v0 by Vercel.
 * @see https://v0.dev/t/evEVmhGssRe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/ux/navbar";
export default function Home() {
  const products = [
    {
      id: 1,
      image: "/placeholder.svg",
      name: "The Alchemist",
      description: "A classic novel about finding your destiny.",
      price: 12.99,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      name: "Atomic Habits",
      description: "A guide to building good habits and breaking bad ones.",
      price: 16.99,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      name: "Where the Crawdads Sing",
      description:
        "A coming-of-age story set in the marshes of North Carolina.",
      price: 10.99,
    },
    {
      id: 4,
      image: "/placeholder.svg",
      name: "Educated",
      description: "A memoir about a woman's journey to education.",
      price: 14.99,
    },
    {
      id: 5,
      image: "/placeholder.svg",
      name: "The Midnight Library",
      description: "A novel about exploring the paths not taken in life.",
      price: 13.99,
    },
    {
      id: 6,
      image: "/placeholder.svg",
      name: "Dune",
      description: "A classic science fiction novel about a desert planet.",
      price: 18.99,
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  return (
    <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
      <NavBar />
      <header className="mb-16 text-center flex flex-col items-center justify-center w-full ">
        <h1 className="text-7xl font-bold">BookFloow</h1>
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
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-background rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/placeholder.svg"
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">${product.price}</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
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
