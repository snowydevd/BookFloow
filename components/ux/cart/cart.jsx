"use client";
import useCart from "@/app/books/cartProvider";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  const { state, dispatch } = useCart();
  const { items } = state;
  let totalPrice = 0;

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  for (let item of items) {
    totalPrice += item.precio;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          <ShoppingCartIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-96">
        <h4 className="text-bold text-xl">Carrito</h4>
        <div className="w-full gap-4">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No has puesto nada en el carrito
            </p>
          ) : (
            <div>
              <ul className="min-w-80  p-4 space-y-2">
                {items.map((item) => (
                  <li key={item.id}>
                    <Card className=" gap-5 py-5">
                      <CardContent className="flex flex-row gap-4 items-end justify-between w-full ">
                        {/* Imagen */}
                        <div className="flex flex-row gap-4 items-start ">
                          <Image
                            src={item.portada}
                            width={50}
                            height={50}
                            className="rounded-sm"
                          />
                          <div>
                            <CardTitle>
                              {" "}
                              <p>Libro {item.titulo}</p>
                            </CardTitle>
                            <CardDescription>
                              {" "}
                              <p>${item.precio}</p>
                            </CardDescription>
                          </div>
                        </div>

                        <Button
                          className="text-red-500"
                          variant="ghost"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remover
                        </Button>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <div>
                  <Button variant="primary">
                    <Link href="/checkout">Checkout</Link>
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => clearCart()}
                    className="text-red-500"
                  >
                    Vaciar
                  </Button>
                </div>
                ${totalPrice.toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
    // <div className="drawer drawer-end">
    //   <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content ">
    //     {/* Page content here */}
    //     <Button variant="ghost">
    //       <label htmlFor="my-drawer-4" className="drawer-button ">
    //         <ShoppingCartIcon />
    //       </label>
    //     </Button>
    //   </div>
    //   <div className="drawer-side">
    //     <label
    //       htmlFor="my-drawer-4"
    //       aria-label="close sidebar"
    //       className="drawer-overlay"
    //     ></label>
    //     <div className="menu text-base-content bg-black min-w-64 min-h-full px-5 py-16">
    //       <h4 className="text-2xl font-bold tracking-tight">Tu carrito</h4>
    //
    //     </div>
    //   </div>
    // </div>
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
