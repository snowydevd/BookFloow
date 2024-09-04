"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import NavbarDropMenu from "./handleSession/navbarDropdownMenu";
import Cart from "./cart/cart";
import Logo from "@/public/mini-logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image alt="BookFloow" src={Logo} width={200} />
            </Link>
            <div className="hidden md:block ml-10">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/weekly"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Hits Semanales
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Libros destacados semanalmente tomando el cuenta
                                el numero de ventas.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/categories/fiction" title="Ficcion">
                          Lo mejor en ciencia ficcion para cualquier edad.
                        </ListItem>
                        <ListItem href="/categories/fiction" title="Infantiles">
                          Libros para ninos
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/typography"
                          title="Romances"
                        >
                          Libros
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Intercambios
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Cart />
            <NavbarDropMenu />
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <User className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Usuario</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      usuario@ejemplo.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Mis pedidos</DropdownMenuItem>
                <DropdownMenuItem>Lista de deseos</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="h-10 w-10 p-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Inicio
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-lg font-medium">
                      Categorías
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link
                          href="/categoria/ficcion"
                          onClick={() => setIsOpen(false)}
                        >
                          Ficción
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/categoria/no-ficcion"
                          onClick={() => setIsOpen(false)}
                        >
                          No Ficción
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/categoria/infantil"
                          onClick={() => setIsOpen(false)}
                        >
                          Infantil
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/categoria/juvenil"
                          onClick={() => setIsOpen(false)}
                        >
                          Juvenil
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link
                    href="/ofertas"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Ofertas
                  </Link>
                  <Link
                    href="/contacto"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Contacto
                  </Link>
                  <Link
                    href="/carrito"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Carrito
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
