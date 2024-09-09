"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, BookOpen } from "lucide-react";

export default function UploadForm() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl mx-auto bg-zinc-900 text-zinc-100">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-blue-500">
            Subir Nuevo Libro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="cover"
                    className="text-lg font-semibold text-zinc-300"
                  >
                    Portada del Libro
                  </Label>
                  <div className="relative h-40 border-2 border-dashed border-blue-500/50 rounded-lg overflow-hidden group">
                    <Input
                      id="cover"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                    />
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Vista previa"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-blue-500/70 group-hover:text-blue-400 transition-colors">
                        <Upload size={40} />
                        <span className="mt-2 font-medium">
                          Seleccionar imagen
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="title"
                    className="text-lg font-semibold text-zinc-300"
                  >
                    Título
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-zinc-100"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="author"
                    className="text-lg font-semibold text-zinc-300"
                  >
                    Autor
                  </Label>
                  <Input
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-zinc-100"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="pages"
                    className="text-lg font-semibold text-zinc-300"
                  >
                    Número de Páginas
                  </Label>
                  <Input
                    id="pages"
                    name="pages"
                    type="number"
                    value={formData.pages}
                    onChange={handleInputChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-zinc-100"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="publisher"
                    className="text-lg font-semibold text-zinc-300"
                  >
                    Editorial
                  </Label>
                  <Input
                    id="publisher"
                    name="publisher"
                    value={formData.publisher}
                    onChange={handleInputChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-zinc-100"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="summary"
                    className="text-lg font-semibold text-zinc-300"
                  >
                    Resumen Breve
                  </Label>
                  <Textarea
                    id="summary"
                    name="summary"
                    value={formData.summary}
                    onChange={handleInputChange}
                    required
                    className="min-h-[150px] bg-zinc-800 border-zinc-700 text-zinc-100"
                  />
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="mr-2" />
              Subir Libro
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
