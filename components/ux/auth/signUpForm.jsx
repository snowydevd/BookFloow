"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password || !confirmPassword || !birthdate) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Aquí iría la lógica para enviar los datos al servidor
    console.log("Formulario enviado", { username, email, password, birthdate });
  };
  return (
    <main className="flex h-screen w-full">
      <section className="w-full md:w-1/3 lg:w-1/4  p-8 overflow-y-auto shadow-2xl space-y-4">
        <Link href="/" className="underline text-sm mb-6">
          Volver
        </Link>
        <h2 className="text-2xl font-bold mb-2">Registro de Usuario</h2>
        <p className="text-gray-600 mb-6">
          Crea una nueva cuenta para acceder a nuestros servicios.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Usuario</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu nombre de usuario"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@ejemplo.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirma tu contraseña"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Fecha de nacimiento</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${
                    !birthdate && "text-muted-foreground"
                  }`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {birthdate ? (
                    format(birthdate, "PPP", { locale: es })
                  ) : (
                    <span>Selecciona una fecha</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={birthdate}
                  onSelect={setBirthdate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Registrarse
          </Button>
        </form>
      </section>
      <div
        className="hidden md:block md:w-2/3 lg:w-3/4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505063366573-38928ae5567e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
    </main>
  );
}
