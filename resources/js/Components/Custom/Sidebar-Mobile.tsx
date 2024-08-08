import Link from "next/link"
import {
  CalendarClock,
  Coins,
  FileBox,
  FileIcon,
  Home,
  LogOut,
  PanelLeft,
  Printer,
  Settings,
  UserCheck,
  Users2,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { SidebarButton } from "./Sidebar-Button"
import { Separator } from "../ui/separator"

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="border-none sm:hidden">
          <PanelLeft className="w-5 h-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <div className='grid items-center justify-between w-full'>
            <Popover>
              <PopoverTrigger asChild>
                <Link href="#" className="flex items-center justify-start gap-2 md:text-base">
                  <Avatar className="flex text-lg font-semibold rounded-full shrink-0 ">
                    <AvatarImage src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7335189409555283986.jpeg?lk3s=a5d48078&nonce=30702&refresh_token=2ab23f2c978712d061cb1940c3e92433&x-expires=1718953200&x-signature=wIIghc5T3xTyk7Sj61W18zsmu74%3D&shp=a5d48078&shcp=81f88b70' />
                    <AvatarFallback>Cafranca, Jerome</AvatarFallback>
                  </Avatar>
                  <span className="font-extrabold">Cafranca, Jerome</span>
                </Link>
              </PopoverTrigger>
              <PopoverContent className='mt-2 ml-5 w-60 p-3 rounded-[0.8rem]'>
                <div className='space-y-1'>
                  <Link href="/">
                    <SidebarButton size='sm' icon={UserCheck} className='w-full'>
                      Profile
                    </SidebarButton>
                  </Link>
                  <Link href="/">
                    <SidebarButton size='sm' icon={Settings} className='w-full'>
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <Link href="/">
                    <SidebarButton size='sm' icon={FileIcon} className='w-full'>
                      File Resignation
                    </SidebarButton>
                  </Link>
                  <Separator className="w-full my-5" />
                  <SidebarButton size='sm' icon={LogOut} className='w-full'>
                    Log Out
                  </SidebarButton>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
            <Home className="w-5 h-5" />
            Dashboard
          </Link>
          <span className="text-sm font-extrabold text-muted-foreground">Interface</span>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-foreground" >
            <CalendarClock className="w-5 h-5" />
            Time Logs
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <FileBox className="w-5 h-5" />
            Leave
          </Link>
          <span className="text-sm text-muted-foreground">Addons</span>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Users2 className="w-5 h-5" />
            Memo
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Coins className="w-5 h-5" />
            Allowance / Incentives
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Printer className="w-5 h-5" />
            Print
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}