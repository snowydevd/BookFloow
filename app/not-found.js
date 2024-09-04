import Link from "next/link";
import { Home, ShoppingBag, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        404 - Página No Encontrada
      </h1>
      <p className="text-xl mb-8 text-gray-600">
        ¡Ups! La página que buscas no existe.
      </p>
      <div className="space-y-4">
        <Link
          href="/"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>Ir a la Página de Inicio</span>
        </Link>
        <Link
          href="/catalogo"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Explorar Catálogo</span>
        </Link>
        <Link
          href="/contacto"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Contáctanos</span>
        </Link>
      </div>
    </div>
  );
}
