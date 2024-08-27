"use client";
import useCart from "@/app/books/cartProvider";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

export default function Cart() {
  const { state, dispatch } = useCart();
  const { items } = state;

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <ShoppingCartIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tu carrito</DialogTitle>
          <DialogDescription>Completa o cancela tus compras</DialogDescription>
        </DialogHeader>
        <article className="grid gap-4 py-4">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <Card className="max-w-96 min-w-64 gap-5">
                  <CardHeader>
                    <p>Libro {item.titulo}</p>
                    <p>${item.precio}</p>
                  </CardHeader>

                  <CardFooter>
                    <Button
                      variant="destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </Button>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </article>
        <DialogFooter>
          <Link href="/cart">
            <Button type="submit">Comprar</Button>
          </Link>
          <Button type="secondary">Vaciar carrito</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
