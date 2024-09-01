import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignInGoogle from "./oAuth/Google";
export default function SignInForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
        <CardDescription>
          Ingresa tus credenciales para acceder a tu cuenta
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div> */}

        <form className="grid gap-5">
          <div className="grid gap-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Recordar por 30 días
            </label>
          </div>
          <Button className="w-full">Iniciar sesión</Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <p className="mt-2 text-xs text-center text-muted-foreground">
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </p>
        <SignInGoogle />
      </CardFooter>
    </Card>
  );
}
