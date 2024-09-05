"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, BookOpen } from "lucide-react";

// FIRESTORE;
// import { db } from "@/app/firebase/config";
// import { collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function UploadForm() {
  const [bookData, setBookData] = useState({
    titulo: "",
    autor: "",
    paginas: "",
    precio: "",
    portada: null,
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "portada") {
      setBookData((prevData) => ({ ...prevData, portada: files[0] }));
    } else {
      setBookData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    const formData = new FormData();
    formData.append("titulo", bookData.titulo);
    formData.append("autor", bookData.autor);
    formData.append("paginas", bookData.paginas);
    formData.append("precio", bookData.precio);
    formData.append("portada", bookData.portada);

    console.log(formData);

    try {
      const response = await fetch("/api/uploadbook", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al subir el libro");
      }

      const data = await response.json();
      console.log("Libro subido con éxito:", data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título del libro"
          value={bookData.titulo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          value={bookData.autor}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="paginas"
          placeholder="Número de páginas"
          value={bookData.paginas}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={bookData.precio}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="portada"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={uploading}>
          {uploading ? "Subiendo..." : "Subir Libro"}
        </button>
      </form>
    </div>
  );
}
