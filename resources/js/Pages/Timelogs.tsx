import Guest from "@/Layouts/GuestLayout";
import { Header } from "./Template/Header";
import { Footer } from "./Template/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import * as React from "react"
import { CalendarIcon, Check, ChevronsUpDown, File, History, LucideClock10, PlusCircle, ReplyIcon, Send, SendToBackIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { Button } from "@/Components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/Components/ui/command";
import { cn } from "@/lib/utils"
import { MonthPicker } from "@/Components/Custom/Picker/MonthPicker";
import { DateRangePicker } from "@/Components/Custom/Picker/DateRangePicker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { TimesheetTable } from "@/Components/Custom/TimesheetTable";
import { Label } from "@/Components/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Badge } from "@/Components/ui/badge";
import OTsTable from "@/Components/Custom/OTsTable";
import { formatDate } from "date-fns";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { useForm } from "@inertiajs/react";
import { number } from "zod";

const periods = [
    {
        value: 1,
        label: "1st cut off",
    },
    {
        value: 2,
        label: "2nd cut off",
    },
]
export default function Timelogs() {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(1)
    const [month, setMonth] = React.useState<Date>()
    const [isPopoverOpen, setIsPopoverOpen] = React.useState<boolean>(false)
    const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false)

    const handleMonthChange = (date: Date) => {
        setMonth(date)
    };
    const { data, setData, processing, errors, post } = useForm({
        dob: "",
        fullname: ""
    })

    const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault
        post(route(""))
    }

    return (
        <Guest title="Timelogs">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header title="Timelogs" subtitle="Record time spent on tasks, tracking productivity and aiding in project management and billing." />
                <main className="grid flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8">
                    <Tabs defaultValue="timesheet">
                        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                            <TabsList>
                                <TabsTrigger value="timesheet">Timesheet</TabsTrigger>
                                <TabsTrigger value="ots">OTs</TabsTrigger>
                            </TabsList>

                            <div className="container flex flex-col items-center justify-end gap-2 ml-auto sm:mr-0 md:-mr-8 md:h-24 md:flex-row">
                                <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[235px] justify-start text-left font-normal",
                                                !month && "text-muted-foreground"
                                            )}
                                            onClick={() => setIsPopoverOpen(true)}>
                                            <CalendarIcon className="w-4 h-4 mr-2" />
                                            {month ? formatDate(month, "MMMM yyyy") : <span>Pick a month</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <MonthPicker currentMonth={new Date} onMonthChange={handleMonthChange} />
                                        <div className="grid justify-end grid-flow-col gap-1.5 p-4 pt-0 mt-0">
                                            <Button variant={"outline"} size={"sm"} onClick={() => setIsPopoverOpen(false)}>Ok</Button>
                                            <Button variant={"outline"} size={"sm"} onClick={() => setMonth(undefined)}>Clear</Button>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-[200px] justify-between">
                                            <span className="text-muted-foreground">Period:</span>
                                            {value
                                                ? periods.find((period) => period.value === value)?.label
                                                : "1st cut off"}
                                            <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandList>
                                                <CommandGroup>
                                                    {periods.map((period) => (
                                                        <CommandItem
                                                            key={period.value}
                                                            value={period.value.toString()}
                                                            onSelect={(currentValue) => {
                                                                setValue(parseInt(currentValue) === value ? value : parseInt(currentValue))
                                                                setOpen(false)
                                                            }}>

                                                            {period.label}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto mr-2 h-4 w-4",
                                                                    value === period.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>

                                <Button size="sm" variant="outline" className="gap-1">
                                    <File className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Export
                                    </span>
                                </Button>

                                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button size="sm" variant={"outline"} className="gap-1" onClick={() => setIsDialogOpen(true)}>
                                            <Send className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                Submit
                                            </span>
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Confirmation</DialogTitle>
                                            <DialogDescription>
                                                Make sure that the information below are corrects. Click send when you're done.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <form id="form-confirm" onSubmit={onFormSubmit}>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid items-center grid-cols-4 gap-4">
                                                    <Label htmlFor="dob" className="text-right">
                                                        Date of Birth
                                                    </Label>
                                                    <Input
                                                        value={data.dob}
                                                        onChange={(val) => setData("dob", val.target.value)}
                                                        disabled={processing}
                                                        type="date"
                                                        id="dob"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="grid items-center grid-cols-4 gap-4">
                                                    <Label htmlFor="fullname" className="text-right">
                                                        Fullname
                                                    </Label>
                                                    <Input
                                                        id="fullname"
                                                        value={data.fullname}
                                                        onChange={(val) => setData("fullname", val.target.value)}
                                                        disabled={processing}
                                                        className="col-span-3"
                                                        placeholder="Lastname, Firstname MI"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                        <DialogFooter>
                                            <Button type="submit" form="form-confirm">{processing ? 'Sending...' : 'Send'}</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>

                        <TabsContent value="timesheet" className="container grid gap-4 md:gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                            <Card className="sm:col-span-1 xl:col-span-2">
                                <CardHeader>
                                    <CardTitle className="text-1xl">Pay Period (<span className="text-muted-foreground hover:text-foreground">050624 to 190624</span>)</CardTitle>
                                    <CardDescription>
                                        Remarks: <span className="font-semibold text-blue-600">Fix 96</span>/ <span className="font-semibold text-blue-600">No OT</span>/ <span className="font-semibold text-blue-600">No Allow</span>/ <span className="font-semibold text-blue-600">No ND</span> (If wrong, please inform HR).
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <TimesheetTable />
                                </CardContent>
                            </Card>
                            <Card className="h-fit" x-chunk="dashboard-01-chunk-5">
                                <CardHeader>
                                    <CardTitle>Recent activities</CardTitle>
                                    <CardDescription>Your recent actions inside the current time frame.</CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    <fieldset className="grid gap-6 p-4 border rounded-lg">
                                        <legend className="px-1 -ml-1 text-sm font-semibold">
                                            Overtime
                                        </legend>
                                        <div className="grid gap-2">
                                            <p className="text-sm text-muted-foreground ">Jun. 14, 2024 - <span className="font-bold text-accent-foreground">1.5 hour</span> - <span className="font-semibold text-red-500">Disapproved</span></p>
                                            <p className="text-sm text-muted-foreground ">Jun. 07, 2024 - <span className="font-bold text-accent-foreground">0.5 hour</span> - <span className="font-semibold text-green-500">Approved</span></p>
                                        </div>
                                    </fieldset>
                                    <fieldset className="grid gap-6 p-4 border rounded-lg">
                                        <legend className="px-1 -ml-1 text-sm font-semibold">
                                            PCV
                                        </legend>
                                        <div className="grid gap-3">
                                            <p className="text-sm font-semibold text-muted-foreground">No Record</p>
                                        </div>
                                    </fieldset>
                                    <fieldset className="grid gap-6 p-4 border rounded-lg">
                                        <legend className="px-1 -ml-1 text-sm font-semibold">
                                            Allowance & Incentive
                                        </legend>
                                        <div className="grid gap-3">
                                            <p className="text-sm font-semibold text-muted-foreground">No Record</p>
                                        </div>
                                    </fieldset>
                                    <fieldset className="grid gap-6 p-4 border rounded-lg">
                                        <legend className="px-1 -ml-1 text-sm font-semibold">
                                            Leave
                                        </legend>
                                        <div className="grid gap-3">
                                            <p className="text-sm font-semibold text-muted-foreground">No Record</p>
                                        </div>
                                    </fieldset>
                                    <fieldset className="grid gap-6 p-4 border rounded-lg">
                                        <legend className="px-1 -ml-1 text-sm font-semibold">
                                            Adjustments
                                        </legend>
                                        <div className="grid gap-3">
                                            <p className="text-sm font-semibold text-muted-foreground">No Record</p>
                                        </div>
                                    </fieldset>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="ots" className="container">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex text-1xl">
                                        Overtime / Excess
                                        <div className="flex items-center gap-2 pr-[14px] sm:ml-auto">
                                            <div className="flex items-center gap-1">
                                                <Badge className="" variant="outline">
                                                    30.0
                                                </Badge>
                                                Overtime
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Badge variant="outline">00:00</Badge>
                                                Excess
                                            </div>
                                        </div>
                                    </CardTitle>
                                    <CardDescription>
                                        Monitor, control, and disclose overtime and excess hours.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <OTsTable />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
                <Footer />
            </div>
        </Guest >
    )
}