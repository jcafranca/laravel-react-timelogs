import { Button } from "@/Components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { DateRangePicker } from "../Picker/DateRangePicker"
import { Checkbox } from "@/Components/ui/checkbox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { leave_reasons } from '../DataTableComponents/Data'
import { Textarea } from "@/Components/ui/textarea"
import { useForm } from "@inertiajs/react"
import { FormEventHandler, useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group"
import { DateRange, DayPicker } from "react-day-picker"
import { formatDate } from "date-fns"
import { DatePicker } from "../Picker/DatePicker"
import { MultipleDatePicker } from "../Picker/MultipleDatePicker"
import { Badge } from "@/Components/ui/badge"

export function LeaveRequestDialog() {

    const [dateRange, setDateRange] = useState(null);
    const [type, setType] = useState<string | undefined>("0");
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const { data, setData, errors, processing, post } = useForm(
        {
            pick_up_date: "",
            reason: "",
            remarks: "",
            attachment: "",
        }
    );

    const handleDateChange = (date: DateRange | undefined) => {
        const from = date?.from && formatDate(date.from, "yyyy-MM-dd")
        const to = date?.to && formatDate(date.to, "yyyy-MM-dd")
        setData("pick_up_date", `${from} - ${to}`)
    };

    const onSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        post(route(""))
        !processing ?? setIsDialogOpen(false)
    }
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="mr-2" onClick={() => setIsDialogOpen(true)}>Request</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        Leave Form
                        <Badge variant={"outline"} className="text-muted-foreground">Credits : 0</Badge>
                    </DialogTitle>
                    <DialogDescription>
                        Make sure you have exact leave credits before applying, otherwise it will be leave without pay.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-0">
                    <RadioGroup value={type} onValueChange={(val) => setType(val)} className="justify-center grid-flow-col p-2" defaultValue="0">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="0" id="r1" />
                            <Label htmlFor="r1">Date range</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1" id="r2" />
                            <Label htmlFor="r2">Single date</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="2" id="r3" />
                            <Label htmlFor="r3">Multiple dates</Label>
                        </div>
                    </RadioGroup>
                    <form className="grid gap-4" id="form-request" onSubmit={onSubmit}>
                        <div className="grid gap-4">
                            <Label className="text-start">
                                Pick up a date(s)
                            </Label>
                            {type === "0" ?
                                <DateRangePicker disabled={processing} onDateChange={handleDateChange} />
                                : type === "2" ? <MultipleDatePicker disabled={processing} onDateChange={() => { }} /> : <DatePicker disabled={processing} />}
                        </div>

                        {type === "1" ?
                            <div className="flex items-center space-x-2" >
                                <Checkbox id="is_half_day" />
                                <label htmlFor="is_half_day" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Half Day
                                </label>
                            </div> : null}
                        <div className="grid items-center gap-4">
                            <Label htmlFor="reason" className="w-[167px]">
                                Reason to leave
                            </Label>
                            <Select value={data.reason} onValueChange={(val) => setData("reason", val)}>
                                <SelectTrigger className="w-full ml-auto">
                                    <SelectValue placeholder="Select a reason" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Reasons</SelectLabel>
                                        {leave_reasons.map(lr => <SelectItem value={lr.value}>
                                            <div className="flex items-center">
                                                <lr.icon className="w-4 h-4 mr-2 text-muted-foreground" />
                                                <span>{lr.label}</span>
                                            </div>
                                        </SelectItem>)}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-4">
                            <Label htmlFor="remarks" className="text-start">
                                Remarks
                            </Label>
                            <Textarea value={data.remarks} onChange={(e) => setData("remarks", e.target.value)} placeholder="Type your message here." />
                        </div>
                        <div className="grid items-center w-full gap-2">
                            <div className="grid gap-4">
                                <Label htmlFor="attachment">Attachment</Label>
                                <Input value={data.attachment} id="attachment" type="file" />
                            </div>
                            <p className="text-sm text-red-600">{errors.attachment}</p>
                        </div>
                    </form>
                </div>
                <DialogFooter>
                    <div className="flex gap-2">
                        <Button variant={"outline"} size={"sm"} form="form-request" type="submit">{processing ? 'Submitting...' : 'Submit'}</Button>
                        <Button variant={"outline"} size={"sm"} className="text-white bg-red-500" disabled={processing} onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                    </div>
                </DialogFooter>
                <DialogDescription>
                    Note. Contact HR if need adjustments for leave creadits.
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}
