/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EKBGenPJx6z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import HeroImg from "@/public/hero.png";
import NavBar from "@/components/ux/navbar";
import Image from "next/image";
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src={HeroImg}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Lee, intercambia y lee de nuevo
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Con{" "}
                    <span className="font-bold text-white">
                      BookFl<span className="text-blue-500">oo</span>w
                    </span>{" "}
                    podras intercambiar tus libros que ya no usas con otras
                    personas en la misma situacion que tu.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Books
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sell Your Books
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Books
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Most Popular Titles
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our curated selection of the most sought-after books,
                  from bestsellers to hidden gems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="450"
                    alt="Book Cover"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">The Great Gatsby</h3>
                    <p className="text-muted-foreground">F. Scott Fitzgerald</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="link">Buy</Button>
                    <Button variant="link">Rent</Button>
                    <Button variant="link">Exchange</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="450"
                    alt="Book Cover"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">To Kill a Mockingbird</h3>
                    <p className="text-muted-foreground">Harper Lee</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="link">Buy</Button>
                    <Button variant="link">Rent</Button>
                    <Button variant="link">Exchange</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="450"
                    alt="Book Cover"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">1984</h3>
                    <p className="text-muted-foreground">George Orwell</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="link">Buy</Button>
                    <Button variant="link">Rent</Button>
                    <Button variant="link">Exchange</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Explore Our Vast Selection
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse books by category, author, or title to find your
                  perfect read.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Books
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <div className="grid gap-4">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-base font-medium">John Doe</h4>
                        <p className="text-sm text-muted-foreground">
                          Avid Reader
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "BookExchange has completely transformed the way I
                      discover and access books. The selection is incredible,
                      and the ability to buy, rent, or exchange makes it so
                      convenient."
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-base font-medium">Jane Smith</h4>
                        <p className="text-sm text-muted-foreground">
                          Book Enthusiast
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "I love the ease of use and the wide variety of books
                      available on BookExchange. The customer service is also
                      top-notch, making the entire experience a delight."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a question or need assistance? Our friendly team is here to
                help.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <Input type="text" placeholder="Name" className="max-w-lg" />
                <Input type="email" placeholder="Email" className="max-w-lg" />
                <Textarea placeholder="Message" rows={3} className="max-w-lg" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 bookFloow. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
