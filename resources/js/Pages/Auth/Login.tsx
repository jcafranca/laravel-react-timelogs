import Image from "next/image"
import Link from "next/link"

import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { ThemeProvider } from "next-themes"
import { FormEventHandler } from "react"
import { useForm } from "@inertiajs/react"

export default function Login() {

  const {data, setData, post, errors, processing} = useForm()
  const handleFormSubmit:FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    window.location.href = route("home")
  }
  return (
    <ThemeProvider attribute="class">
      <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your hrms below to login in your account
              </p>
            </div>
            <form className="grid gap-4" id="login-form" onSubmit={handleFormSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="companyid">Company Id</Label>
                <Input
                  id="companyid"
                  type="text"
                  placeholder="ABCD"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" placeholder="ABCD_YYYYMMDD" />
                <Link
                  href={route("forgot-password")}
                  className="inline-block ml-auto text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Button type="submit" className="w-full" form="login-form">
                Login
              </Button>
              <Button variant="outline" className="w-full" type="submit">
                Login as Admin
              </Button>
            </form>
            <div className="mt-4 text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link href="skype:live:.cid.42e86fad0594e1d7?chat" className="underline">
                Contact HR
              </Link>
            </div>
          </div>
        </div>
        <div className="hiddenlg:block">
          <Image
            src="https://ui.shadcn.com/placeholder.svg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </ThemeProvider>
  )
}
