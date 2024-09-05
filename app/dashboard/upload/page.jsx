"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import UploadForm from "@/components/ux/dashboard/uploadForm";

export default function Upload() {
  const [userBooks, setUserBooks] = useState([]);

  const handler = async (e) => {
    e.preventDefault();
    const book = {
      titulo: "Padre rico, Padre pobre",
      autor: "Miyasaki",
      paginas: 230,
      portada: "/public/portada.png",
    };
    setUserBooks(book);
    console.log(userBooks);
  };
  return (
    <main>
      <UploadForm />
    </main>
  );
}
