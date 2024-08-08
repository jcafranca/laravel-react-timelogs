import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger } from "@/Components/ui/context-menu";
import { DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/Components/ui/drawer";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { ContextMenuTrigger } from "@radix-ui/react-context-menu";
import { Activity, ArrowUpRight, Bird, BookOpenCheck, Cake, CalendarClockIcon, CalendarHeartIcon, Clock10, CreditCard, DollarSign, LocateFixedIcon, MapPinIcon, PinIcon, Rabbit, Settings, Share, Table, TimerResetIcon, Turtle, UserCircle, Users } from "lucide-react";
import Link from "next/link"
import { Drawer } from "@/Components/ui/drawer";
import { Label } from "@/Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Header } from "./Template/Header";
import { Progress } from "@/Components/ui/progress";
import * as React from "react"
import { Calendar } from "@/Components/ui/calendar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/Components/ui/resizable";
import { Footer } from "./Template/Footer";
import Guest from "@/Layouts/GuestLayout";
export default function Home() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <Guest title="Home">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header title="Dashboard" subtitle="Your personal dashboard provides easy navigation and clear, real-time updates." />
                <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8">
                    <div className="container grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                        <Card x-chunk="dashboard-01-chunk-0">
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-bold">
                                    Hours <span className="font-medium">(Current Cut Off)</span>
                                </CardTitle>
                                <TimerResetIcon className="w-4 h-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">86 hours 30 mins</div>
                                <p className="text-xs text-muted-foreground">
                                    from this cut off
                                </p>
                            </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-01-chunk-1">
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Leave Count (Usable)
                                </CardTitle>
                                <BookOpenCheck className="w-4 h-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+ 0 day/s</div>
                                <p className="text-xs text-muted-foreground">
                                    remaining for this year
                                </p>
                            </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-01-chunk-2">
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">OT and Excess</CardTitle>
                                <CreditCard className="w-4 h-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">0 ot 0.5 excess</div>
                                <p className="text-xs text-muted-foreground">
                                    remaining on your account
                                </p>
                            </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-01-chunk-3">
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">Pending Request</CardTitle>
                                <Activity className="w-4 h-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+0</div>
                                <p className="text-xs text-muted-foreground">
                                    in your account
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="container grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4" >
                            <CardHeader className="flex flex-row items-center">
                                <div className="grid gap-2">
                                    <CardTitle>Profile Information</CardTitle>
                                    <CardDescription>
                                        Your personal info is listed here.
                                    </CardDescription>
                                </div>
                                <Button asChild size="sm" className="gap-1 ml-auto">
                                    <Link href="#">
                                        Visit HRMS
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <ResizablePanelGroup
                                    direction="horizontal"
                                    className="rounded-lg w-fit -top-5">
                                    <ResizablePanel maxSize={30}>
                                        <div className="space-y-3 max-w-52">
                                            <span data-state="closed">
                                                <div className="overflow-hidden rounded-md">
                                                    <ContextMenu>
                                                        <ContextMenuTrigger>
                                                            <img alt="Cafranca, Jerome" loading="lazy" width="250" height="330" decoding="async" data-nimg="1" className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]" srcSet="https://github.com/shadcn.png 1x, https://github.com/shadcn.png" />
                                                        </ContextMenuTrigger>
                                                        <ContextMenuContent className="w-64">
                                                            <ContextMenuItem inset>
                                                                Back
                                                                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                                                            </ContextMenuItem>
                                                            <ContextMenuItem inset disabled>
                                                                Forward
                                                                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                                                            </ContextMenuItem>
                                                            <ContextMenuItem inset>
                                                                Reload
                                                                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                                                            </ContextMenuItem>
                                                            <ContextMenuSub>
                                                                <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                                                                <ContextMenuSubContent className="w-48">
                                                                    <ContextMenuItem>
                                                                        Save Page As...
                                                                        <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                                                                    </ContextMenuItem>
                                                                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                                                                    <ContextMenuItem>Name Window...</ContextMenuItem>
                                                                    <ContextMenuSeparator />
                                                                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                                                                </ContextMenuSubContent>
                                                            </ContextMenuSub>
                                                            <ContextMenuSeparator />
                                                            <ContextMenuCheckboxItem checked>
                                                                Show Bookmarks Bar
                                                                <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                                                            </ContextMenuCheckboxItem>
                                                            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
                                                            <ContextMenuSeparator />
                                                            <ContextMenuRadioGroup value="pedro">
                                                                <ContextMenuLabel inset>People</ContextMenuLabel>
                                                                <ContextMenuSeparator />
                                                                <ContextMenuRadioItem value="pedro">
                                                                    Pedro Duarte
                                                                </ContextMenuRadioItem>
                                                                <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                                                            </ContextMenuRadioGroup>
                                                        </ContextMenuContent>
                                                    </ContextMenu>
                                                </div>
                                            </span>
                                            <div className="space-y-1 text-sm">
                                                <h3 className="font-bold leading-none">Cafranca Jerome E.</h3>
                                                <p className="text-xs text-muted-foreground">Software (FFAY)</p>
                                            </div>
                                        </div>
                                    </ResizablePanel>
                                    <ResizablePanel maxSize={50}>
                                        <div className="flex items-stretch justify-start h-fit">
                                            <div className="grid gap-1 p-4 pt-0">
                                                <div className="flex items-start p-2 -mx-2 space-x-4 transition-all rounded-md">
                                                    <CalendarHeartIcon />
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium leading-none">Date of Birth</p>
                                                        <p className="text-sm text-muted-foreground">Febuary 23, 1997</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start p-2 -mx-2 space-x-4 transition-all rounded-md">
                                                    <MapPinIcon />
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium leading-none">Address</p>
                                                        <p className="text-sm text-muted-foreground">84 small horseshoe drive, Quezon City</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start p-2 -mx-2 space-x-4 transition-all rounded-md">
                                                    <CalendarClockIcon />
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium leading-none">Shift</p>
                                                        <p className="text-sm text-muted-foreground">Flexible</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start p-2 -mx-2 space-x-4 transition-all rounded-md">
                                                    <Clock10 />
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium leading-none">Time</p>
                                                        <p className="text-sm text-muted-foreground">9:00 - 17:00</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start p-2 -mx-2 space-x-4 transition-all rounded-md">
                                                    <UserCircle />
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium leading-none">Supervisor</p>
                                                        <p className="text-sm text-muted-foreground">NONE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ResizablePanel>
                                </ResizablePanelGroup>


                            </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-01-chunk-5">
                            <CardHeader>
                                <CardTitle>Log Issues</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            2024-06-17
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            No Time Out
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">
                                        <p className="text-sm font-medium leading-none">
                                            10:37:00 AM
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Time IN
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            2024-06-17
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            No Time IN
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">
                                        <p className="text-sm font-medium leading-none">
                                            09:37:00 PM
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Time Out
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
                <Footer />
            </div>
        </Guest>
    )
}