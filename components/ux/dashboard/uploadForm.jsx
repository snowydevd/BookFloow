"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// import { db } from "@/app/firebase/config";
// import { collection, addDoc } from "firebase/firestore";
// import { set } from "date-fns";

export default function UploadForm() {
  // const [bookData, setBookData] = useState({
  //   titulo: "",
  //   autor: "",
  //   paginas: "",
  //   precio: "",
  //   portada: null,
  // });
  const [value, setValue] = useState();
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/uploadbook", {
        method: "POST",
        body: JSON.stringify({
          name: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card>
        <CardHeader>
          <CardTitle>Sube tu libro</CardTitle>
          <CardDescription>
            Agrega un libro a tu biblioteca para que diferentes usuarios puedan
            comprarlo, rentarlo o intercambiarlo
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <form className="space-y-5">
            <div>
              <Label>Titulo</Label>
              <Input
                type="text"
                name="titulo"
                placeholder="Título del libro"
                value={bookData.titulo}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Autor</Label>
              <Input
                type="text"
                name="autor"
                placeholder="Autor del libro"
                value={bookData.autor}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Numero de paginas</Label>
              <Input
                type="number"
                name="paginas"
                placeholder="Numero de paginas"
                value={bookData.paginas}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Precio</Label>
              <Input
                type="number"
                name="precio"
                placeholder="Precio"
                value={bookData.precio}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Portada</Label>
              <Input
                type="file"
                name="portada"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Button type="submit" onClick={(e) => handleSubmit(e)}>
                Subir
              </Button>
            </div>
          </form> */}
          <Input type="text" onChange={(e) => setValue(e.target.value)} />
          <Button onClick={(e) => handleSubmit(e)}>Subir</Button>
        </CardContent>
      </Card>
    </div>
  );
}
